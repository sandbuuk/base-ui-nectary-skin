import refJson from '@sinch-engage/nectary-theme-base/ref.json'
import sysJson from '@sinch-engage/nectary-theme-base/sys.json'
import type { Category } from './SystemColorsTable'

type TableItem = {
  key: string,
  value: string,
  cssName: string,
  tokenName: string,
  colorName: string,
}

type SystemColorItem = {
  tokenName: string,
  cssName: string,
  tokenRefName: string,
  tokenRefValue: string,
}

type StackItem = {
  obj: Record<string, any>,
  keys: string[],
  path: string[],
}

type SystemColors = {
  [key in Category]: SystemColorItem[]
}

const colorMainNames = Object.keys(refJson.color.main) as unknown as (keyof typeof refJson.color.main)[]
const colorComplementaryNames = Object.keys(refJson.color.complementary) as unknown as (keyof typeof refJson.color.complementary)[]

const colorsMainMap: TableItem[] = colorMainNames.reduce((res: TableItem[], name) => {
  for (const variantName of Object.keys(refJson.color.main[name]) as (keyof typeof refJson.color.main[typeof name])[]) {
    const value = refJson.color.main[name][variantName]
    const cssName = `--sinch-ref-color-main-${name}-${variantName}`
    const tokenName = `ref.color.main.${name}.${variantName}`
    const colorName = `${name[0].toUpperCase() + name.substring(1)} ${variantName}`

    res.push({ key: `${name}+${variantName}`, colorName, cssName, tokenName, value })
  }

  return res
}, [])

const colorsComplementaryMap: TableItem[] = colorComplementaryNames.reduce((res: TableItem[], name) => {
  for (const variantName of Object.keys(refJson.color.complementary[name]) as (keyof typeof refJson.color.complementary[typeof name])[]) {
    const value = refJson.color.complementary[name][variantName]
    const cssName = `--sinch-ref-color-complementary-${name}-${variantName}`
    const tokenName = `ref.color.complementary.${name}.${variantName}`
    const colorName = `${name[0].toUpperCase() + name.substring(1)} ${variantName}`

    res.push({ key: `${name}+${variantName}`, colorName, cssName, tokenName, value })
  }

  return res
}, [])

const allColors = [
  ...colorsMainMap,
  ...colorsComplementaryMap,
]

function iterateNestedObject(obj: Record<string, any>, parent: string) {
  const endArray: SystemColorItem[] = []
  const stack: StackItem[] = [{ obj, keys: Object.keys(obj), path: [] }]

  while (stack.length > 0) {
    const { obj, keys, path } = stack.pop()!

    keys.forEach((key) => {
      const value = obj[key]
      const currentPath = [...path, key]

      if (typeof value === 'object' && value !== null) {
        stack.push({ obj: value, keys: Object.keys(value), path: currentPath })
      } else {
        const tokenName = currentPath.reduce((acc, curVal) => `${acc}-${curVal}`, `sinch-sys-color-${parent}`)
        const cssName = currentPath.reduce((acc, curVal) => `${acc}-${curVal}`, `--sinch-sys-color-${parent}`)
        const tokenRefName = allColors.find((item) => item.value === value)

        endArray.push({
          tokenName,
          cssName,
          tokenRefName: (tokenRefName != null) ? tokenRefName.tokenName : value,
          tokenRefValue: value,
        })
      }
    })
  }

  return endArray
}

export const createSystemColors: () => SystemColors = () => {
  const systemColors = {
    container: iterateNestedObject(sysJson.color.container, 'container'),
    status: iterateNestedObject(sysJson.color.status, 'status'),
    cta: iterateNestedObject(sysJson.color.cta, 'cta'),
    primary: iterateNestedObject(sysJson.color.primary, 'primary'),
    text: iterateNestedObject(sysJson.color.text, 'text'),
    feedback: iterateNestedObject(sysJson.color.feedback, 'feedback'),
    border: iterateNestedObject(sysJson.color.border, 'border'),
    'skin tone': iterateNestedObject(sysJson.color.skintone, 'skintone'),
  }

  return systemColors
}
