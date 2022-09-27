import pkg from './package.json'
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

  __version = pkg.version
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

export const getFirstSlotElement = (root: HTMLSlotElement): HTMLElement | null => {
  let slot = root

  while (true) {
    const el = (slot.assignedElements() as HTMLElement[])[0]

    if (el == null) {
      return null
    }

    if (el.tagName !== 'SLOT') {
      return el
    }

    slot = el as HTMLSlotElement
  }
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

export const isElementFocused = ($el: Element | null): boolean => {
  return $el !== null && $el === ($el.getRootNode() as Document).activeElement
}

export class Context {
  #$root: Element
  #listeners = new Set<Element>()
  #name: string
  #isSubscribed = false
  constructor($element: Element, name: string) {
    this.#$root = $element
    this.#name = name
  }

  get elements(): Iterable<Element> {
    return this.#listeners
  }

  subscribe() {
    if (this.#isSubscribed) {
      return
    }

    this.#$root.addEventListener(`-context-connect-${this.#name}`, this.#onConnect)
    this.#$root.addEventListener(`-context-disconnect-${this.#name}`, this.#onDisconnect)
    this.#isSubscribed = true
  }

  unsubscribe() {
    this.#listeners.clear()
    this.#$root.removeEventListener(`-context-connect-${this.#name}`, this.#onConnect)
    this.#$root.removeEventListener(`-context-disconnect-${this.#name}`, this.#onDisconnect)
    this.#isSubscribed = false
  }

  #onConnect = (e: Event) => {
    this.#listeners.add(e.target as Element)
  }

  #onDisconnect = (e: Event) => {
    this.#listeners.delete(e.target as Element)
  }
}
