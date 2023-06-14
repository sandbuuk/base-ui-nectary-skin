import sysJson from '@sinch-engage/nectary-theme-base/sys.json'
import { colorMainMap, colorComplementaryMap } from './create-reference-colors'
import type { Category } from './SystemColorsTable'

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

const allColors = [
  ...colorMainMap,
  ...colorComplementaryMap,
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
