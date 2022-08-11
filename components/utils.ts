import type { TRect } from './types'

const nectaryDefinitions = new Map<string, CustomElementConstructor>()
let nectaryRegistry: CustomElementRegistry | null = null

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

declare global {
  interface ShadowRootInit {
    customElements?: CustomElementRegistry,
  }
}

export class NectaryElement extends HTMLElement {
  attachShadow(options?: Partial<ShadowRootInit>): ShadowRoot {
    return super.attachShadow({
      mode: 'closed',
      delegatesFocus: false,
      customElements: nectaryRegistry!,
      ...options,
    })
  }
}

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

export const clampNumber = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value))
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

const unpackCsv = (csv: string): string[] => {
  return csv === '' ? [] : csv.split(',')
}

const packCsv = (values: Set<string>): string => {
  return Array.from(values).join(',')
}

export const getCsvSet = (acc: string): Set<string> => {
  return new Set(unpackCsv(acc))
}

export const updateCsv = (acc: string, value: string, setActive: boolean): string => {
  const values = getCsvSet(acc)

  if (setActive) {
    values.add(value)
  } else {
    values.delete(value)
  }

  return packCsv(values)
}

export const getFirstCsvValue = (acc: string): string | null => {
  return acc === '' ? null : unpackCsv(acc)[0]
}

export const getRect = (el: Element): TRect => {
  const { x, y, width, height } = el.getBoundingClientRect()

  return { x, y, width, height }
}

export const setClass = (elem: Element, name: string, isSet: boolean) => {
  isSet ? elem.classList.add(name) : elem.classList.remove(name)
}

export const getCssVar = (element: Element, variableName: string): string | null => {
  const result = getComputedStyle(element).getPropertyValue(variableName)

  return result === '' ? null : result
}

const throttle = (delayFn: (cb: (...args: any[]) => void) => any, cancelFn: (id: any) => void) =>
  (cb: (...args: any[]) => void) => {
    let id: any = null
    let fnArgs: any[]

    const delayCallback = () => {
      id = null

      cb(fnArgs)
    }

    return {
      fn: (...args: any[]) => {
        fnArgs = args

        if (id === null) {
          id = delayFn(delayCallback)
        }
      },
      cancel: () => {
        if (id !== null) {
          cancelFn(id)
        }
      },
    }
  }

export const throttleAnimationFrame = throttle(global.requestAnimationFrame, global.cancelAnimationFrame)
