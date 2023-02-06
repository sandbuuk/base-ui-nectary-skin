import { mkdir, readFile, stat, writeFile } from 'fs/promises'
import path from 'path'

const [TOKENS_FILEPATH, OUTDIR] = process.argv.slice(2)

if (OUTDIR == null || OUTDIR === '') {
  throw new Error(`Usage example: tsm ./scripts/process-tokens.ts tokens.json themes/base`)
}

if ((await stat(path.resolve(OUTDIR))).isDirectory() === false) {
  throw new Error(`Cannot find output directory "${OUTDIR}"`)
}

const tokensJson = JSON.parse(await readFile(path.resolve(TOKENS_FILEPATH), 'utf-8')) as TJson
const omitThemeSectionKeysInCssVarName: readonly string[] = []
const CSS_VAR_PREFIX = '--sinch'
const DELIMITER = '-'
const ZERO = '0'
const COMPONENTS_SECTION_KEY = 'comp'
const COMPONENTS_OUTDIR = 'comp'
const ADDITIONAL_COMPONENTS_IMPORTS = ['emoji', 'flag', 'icon']
const ADDITIONAL_SECTION_IMPORTS = ['fonts']

interface TJson {
  [x: string]: string | TJson,
}

type TValue = {
  type: 'color',
  value: string,
} | {
  type: 'boxShadow',
  value: {
    'x': string,
    'y': string,
    'blur': string,
    'spread': string,
    'color': string,
    'type': 'innerShadow' | 'dropShadow',
  } | string,
} | {
  type: 'fontFamilies',
  value: string,
} | {
  type: 'lineHeights',
  value: string,
} | {
  type: 'fontWeights',
  value: string,
} | {
  type: 'fontSizes',
  value: string,
} | {
  type: 'letterSpacing',
  value: string,
} | {
  type: 'paragraphSpacing',
  value: string,
} | {
  type: 'textCase',
  value: string,
} | {
  type: 'textDecoration',
  value: 'none' | 'underline',
} | {
  type: 'borderRadius',
  value: string,
} | {
  type: 'typography',
  value: {
    'fontFamily': string,
    'fontWeight': string,
    'lineHeight': string,
    'fontSize': string,
    'letterSpacing': string,
    'paragraphSpacing': string,
    'paragraphIndent': string,
    'textCase': string,
    'textDecoration': string,
  },
} | {
  type: 'sizing',
  value: string,
}

const isValue = (obj: TJson): obj is TValue => {
  return Reflect.has(obj, 'type') && Reflect.has(obj, 'value')
}

const isJson = (obj: TJson | string): obj is TJson => {
  return typeof obj === 'object' &&
    !Array.isArray(obj) &&
    obj != null
}

const prepareDir = async (dir: string) => {
  try {
    await stat(dir)
  } catch {
    await mkdir(dir, { recursive: true })
  }
}

const writeData = async (dir: string, filename: string, data: string) => {
  const outdir = path.resolve(dir)

  await prepareDir(outdir)

  await writeFile(path.join(outdir, filename), data, { encoding: 'utf-8' })
}

const normalizeKey = (key: string) => key.toLowerCase().replaceAll('_', '-')
const getCssVarPrefix = (themeSectionKey: string, componentName?: string) => {
  const prefix = omitThemeSectionKeysInCssVarName.includes(themeSectionKey)
    ? CSS_VAR_PREFIX
    : `${CSS_VAR_PREFIX}${DELIMITER}${themeSectionKey}`

  if (componentName != null) {
    return `${prefix}${DELIMITER}${componentName}`
  }

  return prefix
}

const alphaToHex = (alpha: string): string => {
  return Math.round(parseFloat(alpha) * 255).toString(16)
}

const isInterpolateString = (value: TValue['value']): value is string => typeof value === 'string' && value.startsWith('{')
const getInterpolatePath = (iStr: string): string[] => {
  return iStr.slice(1, -1).split('.').map(normalizeKey)
}

const hasExtensions = (obj: TValue) => {
  return Reflect.has(obj, '$extensions')
}

const getColorAlpha = (obj: TValue): string | null => {
  const modify = (obj as any).$extensions?.['studio.tokens']?.modify

  if (modify != null) {
    const { type, value } = modify

    if (type === 'alpha') {
      return alphaToHex(value)
    }
  }

  return null
}

const refToCss = (iStr: string): string => {
  const [sectionKey, ...restPath] = getInterpolatePath(iStr)

  return `var(${getCssVarPrefix(sectionKey)}${DELIMITER}${restPath.join(DELIMITER)})`
}

const refToValue = (themeJson: TJson, valueObj: TValue): TValue => {
  const { type: origType, value: iStr } = valueObj

  if (!isInterpolateString(iStr)) {
    throw new Error(`Value is not a reference: "${iStr}"`)
  }

  const path = getInterpolatePath(iStr)
  let pathObj = themeJson

  // Follow the reference path
  for (const pathEntry of path) {
    if (!Reflect.has(pathObj, pathEntry)) {
      throw new Error(`Cannot find key "${pathEntry}" at path "${iStr}"`)
    }

    pathObj = pathObj[pathEntry] as TJson
  }

  // Check if value "TValue" has been reached by following the path
  if (isValue(pathObj)) {
    const { type, value } = pathObj

    if (isInterpolateString(value)) {
      return refToValue(themeJson, pathObj)
    }

    // Check if dereferenced value type is different than reference value type
    if (type !== origType) {
      throw new Error(`Reference of type "${origType}" leads to different type "${type}"`)
    }

    // value has been dereferenced
    return pathObj
  }

  throw new Error(`Ref path "${iStr}" didnt lead to a value`)
}

function* visitJsonObject(obj: TJson, accPath: string[] = []): Generator<{path: string[], value: TValue}> {
  if (isValue(obj)) {
    // Final leaf reached
    return yield { path: accPath, value: obj }
  }

  const keys = Object.keys(obj)

  for (const key of keys) {
    const nextObj = obj[key]

    if (!isJson(nextObj)) {
      throw new Error(`Cannot reach the value at path: "${path.join('.')}"`)
    }

    yield* visitJsonObject(nextObj, [...accPath, normalizeKey(key)])
  }
}

const jsonValueToCssValue = (themeJson: TJson, jsonObj: TValue, forceDereferenceValue = false): string => {
  const { type, value } = jsonObj
  const px = (value: string) => (value.endsWith('%') || value === ZERO ? value : `${value}px`)

  if (!hasExtensions(jsonObj)) {
    if (isInterpolateString(value)) {
      return forceDereferenceValue
        ? jsonValueToCssValue(themeJson, refToValue(themeJson, jsonObj), forceDereferenceValue)
        : refToCss(value)
    }
  }

  switch (type) {
    case 'color': {
      const alpha = getColorAlpha(jsonObj)

      if (alpha !== null) {
        const colorValue = isInterpolateString(value)
          ? refToValue(themeJson, jsonObj).value as typeof value
          : value

        return jsonValueToCssValue(themeJson, { type, value: colorValue + alpha }, forceDereferenceValue)
      }

      if (value.startsWith('#')) {
        return value.toUpperCase()
      }

      return value
    }

    case 'boxShadow': {
      if (typeof value === 'string') {
        throw new Error(`Incorrect "${type}" value "${value}"`)
      }

      const { x, y, blur, spread, color } = value

      if (x === ZERO && y === ZERO && blur === ZERO && spread === ZERO) {
        return 'none'
      }

      const colorValue = jsonValueToCssValue(themeJson, { type: 'color', value: color }, forceDereferenceValue)

      return `${px(x)} ${px(y)} ${px(blur)} ${px(spread)} ${colorValue}`
    }

    case 'typography': {
      if (typeof value === 'string') {
        throw new Error(`Incorrect "${type}" value "${value}"`)
      }

      const { fontFamily, fontSize, fontWeight, lineHeight } = value
      const fontFamilyValue = jsonValueToCssValue(themeJson, { type: 'fontFamilies', value: fontFamily }, forceDereferenceValue)
      const fontSizeValue = jsonValueToCssValue(themeJson, { type: 'fontSizes', value: fontSize }, forceDereferenceValue)
      const fontWeightValue = jsonValueToCssValue(themeJson, { type: 'fontWeights', value: fontWeight }, forceDereferenceValue)
      const lineHeightValue = jsonValueToCssValue(themeJson, { type: 'lineHeights', value: lineHeight }, forceDereferenceValue)

      return `${fontWeightValue} ${fontSizeValue}/${lineHeightValue} ${fontFamilyValue}`
    }

    case 'fontFamilies': {
      if (value.toLowerCase().includes('mono')) {
        return `"${value}", monospace`
      }

      return `"${value}", "Arial", sans-serif`
    }

    case 'sizing':
    case 'lineHeights':
    case 'fontSizes':
    case 'borderRadius': {
      return px(value)
    }

    case 'fontWeights':
    case 'letterSpacing':
    case 'paragraphSpacing':
    case 'textDecoration':
    case 'textCase': {
      return value
    }

    default: {
      throw new Error(`Incorrect "${type}" value "${value}"`)
    }
  }
}

const jsonToCss = (themeJson: any, jsonObj: any, prefix: string): string => {
  let data = ':root,\n:host {\n'

  for (const { path, value } of visitJsonObject(jsonObj, [prefix])) {
    const valueStr = jsonValueToCssValue(themeJson, value)

    // Build CSS entry line
    data += `  ${path.join(DELIMITER)}: ${valueStr};\n`
  }

  return `${data}}\n`
}

function* visitThemeSections(themeJson: any): Generator<{key: string, jsonObj: TJson, isComponent: boolean}> {
  const sectionKeysToProcess = Object.keys(themeJson)

  // Iterate over Theme sections like 'ref', 'sys', 'comp'
  for (const sectionKey of sectionKeysToProcess) {
    const sectionObj = themeJson[sectionKey]

    // Process 'comp' section
    if (sectionKey === COMPONENTS_SECTION_KEY) {
      // foreach component
      for (const compNameKey of Object.keys(sectionObj)) {
        const compName = normalizeKey(compNameKey)

        yield { key: compName, isComponent: true, jsonObj: sectionObj[compNameKey] }
      }
    } else {
      yield { key: sectionKey, isComponent: false, jsonObj: sectionObj }
    }
  }
}

/* Process Theme */
const isBaseThemeKey = (key: string) => key.toLowerCase().includes('base')

const [baseThemeKey] = Object.keys(tokensJson).filter(isBaseThemeKey)
const themeJson = tokensJson[baseThemeKey]

if (!isJson(themeJson)) {
  throw new Error(`Cannot get theme json, named "${baseThemeKey}" from tokens json`)
}

// Process sections like 'ref' or 'sys'
for (const { key, jsonObj, isComponent } of visitThemeSections(themeJson)) {
  if (isComponent) {
    const data = jsonToCss(themeJson, jsonObj, getCssVarPrefix(COMPONENTS_SECTION_KEY, key))

    await writeData(path.join(OUTDIR, COMPONENTS_OUTDIR), `${key}.css`, data)
  } else {
    const data = jsonToCss(themeJson, jsonObj, getCssVarPrefix(key))

    await writeData(OUTDIR, `${key}.css`, data)
  }
}

/* Process index.ts */
let importsData = ''

// import fonts.css
for (const add of ADDITIONAL_SECTION_IMPORTS) {
  importsData += `import './${add}.css'\n`
}

for (const { key, isComponent } of visitThemeSections(themeJson)) {
  importsData += isComponent
    ? `import './${COMPONENTS_OUTDIR}/${key}.css'\n`
    : `import './${key}.css'\n`
}

// import 'emoji', 'flag', 'icon'
for (const add of ADDITIONAL_COMPONENTS_IMPORTS) {
  importsData += `import './${COMPONENTS_OUTDIR}/${add}.css'\n`
}

await writeData(OUTDIR, 'index.ts', importsData)

// process section json files, e.g. ref.json, sys.json
for (const { key: sectionNameKey, jsonObj, isComponent } of visitThemeSections(themeJson)) {
  // Skip components
  if (isComponent) {
    continue
  }

  const sectionRoot: TJson = {}

  for (const { path, value } of visitJsonObject(jsonObj)) {
    const valueStr = jsonValueToCssValue(themeJson, value, true)
    let temp = sectionRoot

    // recreate path structure in result object
    for (let i = 0; i < path.length; i++) {
      const pathEntry = path[i]
      const isLastPathEntry = i === path.length - 1

      if (!Reflect.has(temp, pathEntry)) {
        temp[pathEntry] = isLastPathEntry ? valueStr : {}
      }

      temp = temp[pathEntry] as TJson
    }
  }

  await writeData(OUTDIR, `${sectionNameKey}.json`, JSON.stringify(sectionRoot, null, 2))
}
