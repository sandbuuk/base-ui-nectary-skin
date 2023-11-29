import { mkdir, readFile, stat, writeFile } from 'fs/promises'
import path from 'path'

const [TOKENS_FILEPATH, OUTDIR, INPUT_THEME_KEY] = process.argv.slice(2)

if (INPUT_THEME_KEY == null || INPUT_THEME_KEY === '') {
  throw new Error(`Usage example: tsm ./scripts/process-tokens.ts ./tokens/data.json themes/base base`)
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

const THEME_CLASS_NAMES: Record<string, string> = {
  'Nectary / Base theme': '.nectary-theme-base',
  'Nectary / Dark theme': '.nectary-theme-base.nectary-theme-dark',
  'SaaS/ MessageMedia': '.nectary-theme-base.nectary-theme-message-media',
  'cPaas/Base theme': '.nectary-theme-base.cpaas-theme-base',
  'cPaas/MailGun': '.nectary-theme-base.cpaas-theme-base.cpaas-theme-mailgun',
  'cPaas/MailJet': '.nectary-theme-base.cpaas-theme-base.cpaas-theme-mailjet',
  'cPaas/Dashboard': '.nectary-theme-base.cpaas-theme-base.cpaas-theme-dashboard',
}

const [SELECTED_THEME_KEY] = Object.keys(tokensJson).filter((key: string) => key.toLowerCase().includes(INPUT_THEME_KEY))

if (SELECTED_THEME_KEY == null) {
  throw new Error(`Cannot find theme by key: "${INPUT_THEME_KEY}"`)
}

const THEME_CLASS_NAME = THEME_CLASS_NAMES[SELECTED_THEME_KEY]

const isBaseThemeKey = (key: string) => key === 'Nectary / Base theme'
const [BASE_THEME_KEY] = Object.keys(tokensJson).filter(isBaseThemeKey)

if (BASE_THEME_KEY == null) {
  throw new Error(`Cannot find base theme by key "base"`)
}

const isValue = (obj: TJson): obj is TValue => {
  return Reflect.has(obj, 'type') && Reflect.has(obj, 'value')
}

const isJson = (obj: TJson | string): obj is TJson => {
  return typeof obj === 'object' &&
    !Array.isArray(obj) &&
    obj != null
}

const SELECTED_THEME_JSON = tokensJson[SELECTED_THEME_KEY]

if (!isJson(SELECTED_THEME_JSON)) {
  throw new Error(`Cannot get theme json, named "${SELECTED_THEME_KEY}" from tokens json`)
}

const BASE_THEME_JSON = tokensJson[BASE_THEME_KEY]

if (!isJson(BASE_THEME_JSON)) {
  throw new Error(`Cannot get base theme json, named "${BASE_THEME_KEY}" from tokens json`)
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

const refToValue = (valueObj: TValue): TValue => {
  if (!isInterpolateString(valueObj.value)) {
    throw new Error(`Value is not a reference: "${valueObj.value}"`)
  }

  const refToValueImpl = (themeJson: TJson, valueObj: TValue): TValue | null => {
    const { value: iStr } = valueObj

    if (!isInterpolateString(iStr)) {
      throw new Error(`Value is not a reference: "${iStr}"`)
    }

    const path = getInterpolatePath(iStr)
    let pathObj = themeJson

    // Follow the reference path
    for (const pathEntry of path) {
      if (!Reflect.has(pathObj, pathEntry)) {
        return null
      }

      pathObj = pathObj[pathEntry] as TJson
    }

    // Check if value "TValue" has been reached by following the path
    if (isValue(pathObj)) {
      return isInterpolateString(pathObj.value)
        ? refToValueImpl(themeJson, pathObj)
        : pathObj
    }

    return null
  }

  const result = refToValueImpl(SELECTED_THEME_JSON, valueObj) ?? refToValueImpl(BASE_THEME_JSON, valueObj)

  if (result === null) {
    throw new Error(`Cannot dereference value at path "${getInterpolatePath(valueObj.value)}"`)
  }

  // Check if dereferenced value type is different than reference value type
  if (result.type !== valueObj.type) {
    throw new Error(`Reference of type "${valueObj.type}" leads to different type "${result.type}"`)
  }

  return result
}

function* visitJsonObject(obj: TJson, accPath: string[] = []): Generator<{path: string[], value: TValue}> {
  if (isValue(obj)) {
    // Final leaf reached
    return yield { path: accPath, value: obj }
  }

  const keys = Object.keys(obj).sort((a, b) => a.localeCompare(b))

  for (const key of keys) {
    const nextObj = obj[key]

    if (!isJson(nextObj)) {
      throw new Error(`Cannot reach the value at path: "${path.join('.')}"`)
    }

    yield* visitJsonObject(nextObj, [...accPath, normalizeKey(key)])
  }
}

const jsonValueToCssValue = (jsonObj: TValue, forceDereferenceValue = false): string => {
  const { type, value } = jsonObj
  const px = (value: string) => (value.endsWith('%') || value === ZERO ? value : `${value}px`)

  if (!hasExtensions(jsonObj)) {
    if (isInterpolateString(value)) {
      return forceDereferenceValue
        ? jsonValueToCssValue(refToValue(jsonObj), forceDereferenceValue)
        : refToCss(value)
    }
  }

  switch (type) {
    case 'color': {
      const alpha = getColorAlpha(jsonObj)

      if (alpha !== null) {
        const colorValue = isInterpolateString(value)
          ? refToValue(jsonObj).value as typeof value
          : value

        return jsonValueToCssValue({ type, value: colorValue + alpha }, forceDereferenceValue)
      }

      if (value.startsWith('#')) {
        return value.toUpperCase()
      }

      if (value === 'rgba(0,0,0,0)') {
        return 'transparent'
      }

      return value
    }

    case 'boxShadow': {
      if (typeof value === 'string') {
        throw new Error(`Incorrect "${type}" value "${value}"`)
      }

      const { x, y, blur, color } = value

      if (x === ZERO && y === ZERO && blur === ZERO) {
        return 'none'
      }

      const colorValue = jsonValueToCssValue({ type: 'color', value: color }, forceDereferenceValue)

      return `${px(x)} ${px(y)} ${px(blur)} ${colorValue}`
    }

    case 'typography': {
      if (typeof value === 'string') {
        throw new Error(`Incorrect "${type}" value "${value}"`)
      }

      const { fontFamily, fontSize, fontWeight, lineHeight } = value
      const fontFamilyValue = jsonValueToCssValue({ type: 'fontFamilies', value: fontFamily }, forceDereferenceValue)
      const fontSizeValue = jsonValueToCssValue({ type: 'fontSizes', value: fontSize }, forceDereferenceValue)
      const fontWeightValue = jsonValueToCssValue({ type: 'fontWeights', value: fontWeight }, forceDereferenceValue)
      const lineHeightValue = jsonValueToCssValue({ type: 'lineHeights', value: lineHeight }, forceDereferenceValue)

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

const jsonToCss = (jsonObj: any, prefix: string): string => {
  let data = `${THEME_CLASS_NAME} {\n`

  for (const { path, value } of visitJsonObject(jsonObj, [prefix])) {
    const valueStr = jsonValueToCssValue(value)

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
      for (const compNameKey of Object.keys(sectionObj).sort((a, b) => a.localeCompare(b))) {
        const compName = normalizeKey(compNameKey)

        yield { key: compName, isComponent: true, jsonObj: sectionObj[compNameKey] }
      }
    } else {
      yield { key: sectionKey, isComponent: false, jsonObj: sectionObj }
    }
  }
}

/* Process Theme */

// Process sections like 'ref' or 'sys'
for (const { key, jsonObj, isComponent } of visitThemeSections(SELECTED_THEME_JSON)) {
  if (isComponent) {
    const data = jsonToCss(jsonObj, getCssVarPrefix(COMPONENTS_SECTION_KEY, key))

    await writeData(path.join(OUTDIR, COMPONENTS_OUTDIR), `${key}.css`, data)
  } else {
    const data = jsonToCss(jsonObj, getCssVarPrefix(key))

    await writeData(OUTDIR, `${key}.css`, data)
  }
}

/* Process index.js */
let indexJsFileData = ''
/* Process index.css */
let indexCssFileData = ''

// Base theme only: import additional sections like 'fonts'
if (isBaseThemeKey(SELECTED_THEME_KEY)) {
  for (const add of ADDITIONAL_SECTION_IMPORTS) {
    indexJsFileData += `import './${add}.css'\n`
    indexCssFileData += `@import "./${add}.css";\n`
  }
}

for (const { key, isComponent } of visitThemeSections(SELECTED_THEME_JSON)) {
  indexJsFileData += isComponent
    ? `import './${COMPONENTS_OUTDIR}/${key}.css'\n`
    : `import './${key}.css'\n`
  indexCssFileData += isComponent
    ? `@import "./${COMPONENTS_OUTDIR}/${key}.css";\n`
    : `@import "./${key}.css";\n`
}

// Base theme only: import additional components 'emoji', 'flag', 'icon'
if (isBaseThemeKey(SELECTED_THEME_KEY)) {
  for (const add of ADDITIONAL_COMPONENTS_IMPORTS) {
    indexJsFileData += `import './${COMPONENTS_OUTDIR}/${add}.css'\n`
    indexCssFileData += `@import "./${COMPONENTS_OUTDIR}/${add}.css";\n`
  }
}

await writeData(OUTDIR, 'index.js', indexJsFileData)
await writeData(OUTDIR, 'index.css', indexCssFileData)

/* Process section json files, e.g. ref.json, sys.json */
for (const { key: sectionNameKey, jsonObj, isComponent } of visitThemeSections(SELECTED_THEME_JSON)) {
  // Skip components
  if (isComponent) {
    continue
  }

  const sectionRoot: TJson = {}

  for (const { path, value } of visitJsonObject(jsonObj)) {
    const valueStr = jsonValueToCssValue(value, true)
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
