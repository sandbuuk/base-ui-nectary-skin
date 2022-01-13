export type TEventHandler = (arg?: any) => void

export const getEventHandler = ($element: HTMLElement, handlerName: string): TEventHandler | null => {
  // https://github.com/facebook/react/issues/7901
  for (const key in $element) {
    if (key.startsWith('__reactProps$')) {
      // @ts-ignore
      return $element[key][handlerName]
    }
  }

  return null
}

export const defineCustomElement = (name: string, constructor: CustomElementConstructor): void => {
  if (customElements.get(name) == null) {
    customElements.define(name, constructor)
  }
}

export const updateBooleanAttribute = ($element: HTMLElement, attrName: string, attrValue: boolean | null | undefined) => {
  if (attrValue === true) {
    $element.setAttribute(attrName, '')
  } else {
    $element.removeAttribute(attrName)
  }
}

export const isAttrTrue = (attrValue: string | null): boolean => {
  return attrValue === '' || (attrValue !== 'false' && attrValue !== null)
}

export const getBooleanAttribute = ($element: HTMLElement, attrName: string) => {
  return isAttrTrue($element.getAttribute(attrName))
}

export const updateAttribute = ($element: HTMLElement, attrName: string, attrValue: string | number | boolean | null | undefined) => {
  if (attrValue != null) {
    $element.setAttribute(attrName, String(attrValue))
  } else {
    $element.removeAttribute(attrName)
  }
}

export function getAttribute($element: HTMLElement, attrName: string): string | undefined
export function getAttribute($element: HTMLElement, attrName: string, defaultValue: string): string
export function getAttribute($element: HTMLElement, attrName: string, defaultValue?: string) {
  return $element.getAttribute(attrName) ?? defaultValue
}

export const isLiteralValue = <T extends readonly string[]>(literals: T, value: string | null | undefined): value is T[number] => {
  return value != null && literals.includes(value)
}

export const updateLiteralAttribute = <T extends readonly string[]>($element: HTMLElement, literals: T, attrName: string, attrValue: T[number] | null | undefined) => {
  if (!isLiteralValue(literals, attrValue)) {
    // Silently ignore incorrect value
    return
  }

  if (attrValue != null) {
    $element.setAttribute(attrName, attrValue)
  } else {
    $element.removeAttribute(attrName)
  }
}

export function getLiteralAttribute<T extends readonly string[]>($element: HTMLElement, literals: T, attrName: string): T[number] | undefined
export function getLiteralAttribute<T extends readonly string[]>($element: HTMLElement, literals: T, attrName: string, defaultValue: T[number]): T[number]
export function getLiteralAttribute($element: HTMLElement, literals: string[], attrName: string, defaultValue?: string) {
  const attrValue = $element.getAttribute(attrName)

  return isLiteralValue(literals, attrValue) ? attrValue : defaultValue
}

type TRange = {
  min?: number,
  max?: number,
}

const applyRange = (value: number, range: TRange) => {
  let result = value

  if (typeof range.min === 'number') {
    result = Math.max(range.min, result)
  }

  if (typeof range.max === 'number') {
    result = Math.min(range.max, result)
  }

  return result
}

export const attrValueToInteger = (value: string | null, range: TRange = {}): number | null => {
  if (value === null) {
    return null
  }

  const int = parseInt(value)

  if (!Number.isInteger(int)) {
    // Couldn't parse attribute value
    return null
  }

  return applyRange(int, range)
}

export const attrValueToPixels = (value: string | null, options: TRange & {multiplier?: number} = {}): string => {
  const int = attrValueToInteger(value, { min: options.min ?? 0, max: options.max })

  return int === null ? 'unset' : `${int * (options.multiplier ?? 1)}px`
}

export const updateIntegerAttribute = ($element: HTMLElement | SVGElement, attrName: string, attrValue: string | number | null | undefined, range: TRange = {}) => {
  if (attrValue == null) {
    $element.removeAttribute(attrName)

    return
  }

  const intValue = typeof attrValue === 'string'
    ? attrValueToInteger(attrValue, range)
    : applyRange(attrValue, range)

  if (intValue === null) {
    // Couldn't parse attribute value
    return
  }

  $element.setAttribute(attrName, intValue.toFixed(0))
}

export function getIntegerAttribute($element: HTMLElement, attrName: string): number | undefined
export function getIntegerAttribute($element: HTMLElement, attrName: string, defaultValue: number): number
export function getIntegerAttribute($element: HTMLElement, attrName: string, defaultValue?: number) {
  return attrValueToInteger($element.getAttribute(attrName)) ?? defaultValue
}
