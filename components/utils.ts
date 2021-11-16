export type TEventHandler = (arg?: any) => void

export const getEventHandler = ($element: HTMLElement, handlerName: string): TEventHandler | null => {
  if (Reflect.has($element, handlerName)) {
    // @ts-expect-error
    return $element[handlerName]
  }

  // https://github.com/facebook/react/issues/7901
  for (const key in $element) {
    if (key.startsWith('__reactProps$')) {
      // @ts-expect-error
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
  return attrValue === '' || Boolean(attrValue)
}

export const getBooleanAttribute = ($element: HTMLElement, attrName: string) => {
  return isAttrTrue($element.getAttribute(attrName))
}

export const updateAttribute = ($element: HTMLElement, attrName: string, attrValue: string | null | undefined) => {
  if (attrValue != null) {
    $element.setAttribute(attrName, attrValue)
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

export const attrValueToInteger = (value: string | null): number | null => {
  const int = parseInt(value ?? '')

  return Number.isInteger(int) ? int : null
}

export const attrValueToPixels = (value: string | null): string => {
  const int = attrValueToInteger(value)

  return int !== null ? `${int}px` : 'unset'
}

export const updateIntegerAttribute = ($element: HTMLElement | SVGElement, attrName: string, attrValue: string | number | null | undefined) => {
  const intValue = typeof attrValue === 'string'
    ? attrValueToInteger(attrValue)
    : attrValue

  if (intValue != null) {
    if (intValue < 0) {
      // Silently ignnore negative integer value
      return
    }

    $element.setAttribute(attrName, intValue.toFixed(0))
  } else {
    $element.removeAttribute(attrName)
  }
}

export function getIntegerAttribute($element: HTMLElement, attrName: string): number | undefined
export function getIntegerAttribute($element: HTMLElement, attrName: string, defaultValue: number): number
export function getIntegerAttribute($element: HTMLElement, attrName: string, defaultValue?: number) {
  return attrValueToInteger($element.getAttribute(attrName)) ?? defaultValue
}
