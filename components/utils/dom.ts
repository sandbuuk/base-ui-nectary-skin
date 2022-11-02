export const updateExplicitBooleanAttribute = ($element: Element, attrName: string, attrValue: boolean | null | undefined) => {
  $element.setAttribute(attrName, attrValue === true ? 'true' : 'false')
}

export const isAttrTrue = (attrValue: string | null): boolean => {
  return attrValue === '' || (attrValue !== 'false' && attrValue !== null)
}

export const getBooleanAttribute = ($element: Element, attrName: string) => {
  return isAttrTrue($element.getAttribute(attrName))
}

export const updateBooleanAttribute = ($element: Element, attrName: string, attrValue: boolean | null | undefined) => {
  const currentAttrValue = $element.getAttribute(attrName)

  if (attrValue === true) {
    if (!isAttrTrue(currentAttrValue)) {
      $element.setAttribute(attrName, '')
    }
  } else if (currentAttrValue !== null) {
    $element.removeAttribute(attrName)
  }
}

export const updateAttribute = ($element: Element, attrName: string, attrValue: string | number | boolean | null | undefined) => {
  if (attrValue != null) {
    $element.setAttribute(attrName, String(attrValue))
  } else {
    $element.removeAttribute(attrName)
  }
}

export function getAttribute($element: Element, attrName: string): string | null
export function getAttribute($element: Element, attrName: string, defaultValue: string): string
export function getAttribute($element: Element, attrName: string, defaultValue: string | null = null) {
  return $element.getAttribute(attrName) ?? defaultValue
}

export const isLiteralValue = <T extends readonly string[]>(literals: T, value: string | null | undefined): value is T[number] => {
  return value != null && literals.includes(value)
}

export const updateLiteralAttribute = <T extends readonly string[]>($element: Element, literals: T, attrName: string, attrValue: string | null | undefined) => {
  if (isLiteralValue(literals, attrValue)) {
    $element.setAttribute(attrName, attrValue)
  } else {
    $element.removeAttribute(attrName)
  }
}

export function getLiteralAttribute<T extends readonly string[]>($element: Element, literals: T, attrName: string): T[number]
export function getLiteralAttribute<T extends readonly string[]>($element: Element, literals: T, attrName: string, defaultValue: null): T[number] | null
export function getLiteralAttribute<T extends readonly string[]>($element: Element, literals: T, attrName: string, defaultValue: T[number]): T[number]
export function getLiteralAttribute($element: Element, literals: string[], attrName: string, defaultValue?: string | null) {
  const attrValue = $element.getAttribute(attrName)

  if (isLiteralValue(literals, attrValue)) {
    return attrValue
  }

  if (typeof defaultValue === 'undefined') {
    throw new Error(`Invalid attribute value: ${attrName} = ${attrValue}`)
  }

  return defaultValue
}

export const clampNumber = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value))
}

type IntegerOptions = {
  min?: number,
  max?: number,
  defaultValue?: number | null,
  itemSizeMultiplier?: number,
  itemSpaceBetween?: number,
}

const DEFAULT_INTEGER_OPTIONS: IntegerOptions = {
  itemSizeMultiplier: 1,
  itemSpaceBetween: 0,
  defaultValue: null,
}

const applyRange = (value: number, { min, max }: IntegerOptions) => {
  let result = value

  if (min != null) {
    result = Math.max(min, result)
  }

  if (max != null) {
    result = Math.min(max, result)
  }

  return result
}

export const attrValueToInteger = (value: string | null, options: IntegerOptions = DEFAULT_INTEGER_OPTIONS): number | null => {
  const { defaultValue = null, itemSizeMultiplier = 1, itemSpaceBetween = 0 } = options

  let intValue = defaultValue

  if (value !== null) {
    const int = parseInt(value)

    if (Number.isInteger(int)) {
      intValue = applyRange(int, options)
    }
  }

  if (intValue !== null) {
    return intValue * itemSizeMultiplier + Math.max(intValue - 1, 0) * itemSpaceBetween
  }

  return null
}

export const attrValueToPixels = (value: string | null, options: IntegerOptions = DEFAULT_INTEGER_OPTIONS): string => {
  const int = attrValueToInteger(value, options)

  return int === null ? 'unset' : `${int}px`
}

export const updateIntegerAttribute = ($element: Element, attrName: string, attrValue: string | number | null | undefined, options: IntegerOptions = DEFAULT_INTEGER_OPTIONS) => {
  const { defaultValue = null, itemSizeMultiplier: multiplier = 1 } = options

  let intValue: number | null = null

  if (typeof attrValue === 'string') {
    intValue = attrValueToInteger(attrValue, options)
  } else if (typeof attrValue === 'number') {
    intValue = applyRange(attrValue, options) * multiplier
  } else {
    intValue = defaultValue
  }

  if (intValue === null) {
    $element.removeAttribute(attrName)
  } else {
    $element.setAttribute(attrName, intValue.toFixed(0))
  }
}

export function getIntegerAttribute($element: Element, attrName: string): number | undefined
export function getIntegerAttribute($element: Element, attrName: string, defaultValue: null): number | null
export function getIntegerAttribute($element: Element, attrName: string, defaultValue: number): number
export function getIntegerAttribute($element: Element, attrName: string, defaultValue?: number | null) {
  return attrValueToInteger($element.getAttribute(attrName)) ?? defaultValue
}

export const setClass = (elem: Element, name: string, isSet: boolean) => {
  isSet ? elem.classList.add(name) : elem.classList.remove(name)
}

export const getCssVar = (element: Element, variableName: string): string | null => {
  const result = getComputedStyle(element).getPropertyValue(variableName)

  return result === '' ? null : result
}

export const cloneNode = (el: Element, deep: boolean): Element => {
  const root = el.getRootNode()

  if (root !== document && Reflect.has(root, 'createElement')) {
    const cloned = (root as Document).createElement(el.tagName.toLowerCase())

    for (const attr of el.getAttributeNames()) {
      cloned.setAttribute(attr, el.getAttribute(attr)!)
    }

    if (deep) {
      for (let i = 0; i < el.children.length; i++) {
        const clonedChild = cloneNode(el.children[i], deep)

        cloned.appendChild(clonedChild)
      }
    }

    return cloned
  }

  return el.cloneNode(deep) as Element
}
