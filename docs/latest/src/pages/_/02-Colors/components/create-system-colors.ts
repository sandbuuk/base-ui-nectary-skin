import sysJson from '@nectary/theme-base/sys.json'
import { colorsMain, colorsComplementary } from './create-reference-colors'
import type { Category } from './SystemColorsTable'

type ColorCategoryItem = {
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
  [key in Category]: ColorCategoryItem[]
}

const colors = [
  ...colorsMain,
  ...colorsComplementary,
]

function createColorCategoryItems(obj: Record<string, any>, parent: string) {
  const colorCategoryItems: ColorCategoryItem[] = []
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
        const tokenRefName = colors.find((item) => item.value === value)

        colorCategoryItems.push({
          tokenName,
          cssName,
          tokenRefName: (tokenRefName != null) ? tokenRefName.tokenName : value,
          tokenRefValue: value,
        })
      }
    })
  }

  return colorCategoryItems
}

export const createSystemColors: () => SystemColors = () => {
  const systemColors = {
    container: createColorCategoryItems(sysJson.color.container, 'container'),
    status: createColorCategoryItems(sysJson.color.status, 'status'),
    cta: createColorCategoryItems(sysJson.color.cta, 'cta'),
    primary: createColorCategoryItems(sysJson.color.primary, 'primary'),
    text: createColorCategoryItems(sysJson.color.text, 'text'),
    feedback: createColorCategoryItems(sysJson.color.feedback, 'feedback'),
    border: createColorCategoryItems(sysJson.color.border, 'border'),
    'skin tone': createColorCategoryItems(sysJson.color.skintone, 'skintone'),
  }

  return systemColors
}
