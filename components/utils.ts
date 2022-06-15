import type { TRect } from './types'

const nectaryDefinitions = new Map<string, CustomElementConstructor>()
let nectaryRegistry: CustomElementRegistry | null = null

export const getReactEventHandler = ($element: HTMLElement, handlerName: string): ((arg?: any) => void) | null => {
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
  if (nectaryRegistry !== null) {
    if (nectaryRegistry.get(name) == null) {
      nectaryRegistry.define(name, constructor)
    }

    return
  }

  nectaryDefinitions.set(name, constructor)
}

export const setNectaryRegistry = (registry: CustomElementRegistry): void => {
  if (nectaryRegistry !== null) {
    throw new Error('Nectary elements already registered')
  }

  nectaryRegistry = registry

  for (const [name, ctor] of nectaryDefinitions.entries()) {
    if (nectaryRegistry.get(name) == null) {
      nectaryRegistry.define(name, ctor)
    }
  }

  nectaryDefinitions.clear()
}

}

export type TEventHandler = (arg?: any) => void

export const updateBooleanAttribute = ($element: Element, attrName: string, attrValue: boolean | null | undefined) => {
  if (attrValue === true) {
    $element.setAttribute(attrName, '')
  } else {
    $element.removeAttribute(attrName)
  }
}

export const updateExplicitBooleanAttribute = ($element: Element, attrName: string, attrValue: boolean | null | undefined) => {
  $element.setAttribute(attrName, attrValue === true ? 'true' : 'false')
}

export const isAttrTrue = (attrValue: string | null): boolean => {
  return attrValue === '' || (attrValue !== 'false' && attrValue !== null)
}

export const getBooleanAttribute = ($element: Element, attrName: string) => {
  return isAttrTrue($element.getAttribute(attrName))
}

export const updateAttribute = ($element: Element, attrName: string, attrValue: string | number | boolean | null | undefined) => {
  if (attrValue != null) {
    $element.setAttribute(attrName, String(attrValue))
  } else {
    $element.removeAttribute(attrName)
  }
}

export function getAttribute($element: Element, attrName: string): string | undefined
export function getAttribute($element: Element, attrName: string, defaultValue: null): string | null
export function getAttribute($element: Element, attrName: string, defaultValue: string): string
export function getAttribute($element: Element, attrName: string, defaultValue?: string | null) {
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

export const updateIntegerAttribute = ($element: Element, attrName: string, attrValue: string | number | null | undefined, range: TRange = {}) => {
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

export function getIntegerAttribute($element: Element, attrName: string): number | undefined
export function getIntegerAttribute($element: Element, attrName: string, defaultValue: null): number | null
export function getIntegerAttribute($element: Element, attrName: string, defaultValue: number): number
export function getIntegerAttribute($element: Element, attrName: string, defaultValue?: number | null) {
  return attrValueToInteger($element.getAttribute(attrName)) ?? defaultValue
}

export const updateCSV = (acc: string, value: string, setActive: boolean): string => {
  const values = acc === '' ? [] : acc.split(',')
  const i = values.indexOf(value)

  if (setActive) {
    i === -1 && values.push(value)
  } else {
    i >= 0 && values.splice(i, 1)
  }

  return values.join(',')
}

export const getCSVSet = (acc: string): Set<string> => {
  if (acc === '') {
    return new Set()
  }

  return new Set(acc.split(','))
}

export const getFirstCSValue = (acc: string): string => {
  return acc.split(',')[0]
}

export const getRect = (el: Element): TRect => {
  const { x, y, width, height } = el.getBoundingClientRect()

  return { x, y, width, height }
}

export const setClass = (elem: Element, name: string, isSet: boolean) => {
  isSet ? elem.classList.add(name) : elem.classList.remove(name)
}
