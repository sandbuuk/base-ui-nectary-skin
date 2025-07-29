import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export type SafeSelect<T extends object, K extends string | number | symbol> =
  K extends keyof T
    ? T[K] extends object
      ? T[K]
      : {}
    : {}

type CamelCaseString<S extends string> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCaseString<P3>}`
  : S

export type CamelCaseify<T> = T extends object
  ? { [K in keyof T as K extends string ? CamelCaseString<K> : K]: T[K] }
  : T

export type RemoveReadonly<T> = {
  [P in keyof T as T[P] extends { readonly [K: string]: any } ? never : P]: T[P]
}

type ExtractEventTypes<T> = {
  [K in keyof T]: T[K] extends (e: infer E) => void ? E : T[K]
}

export type ExtendEventListeners<Events> = {
  addEventListener<K extends keyof (ExtractEventTypes<Events> & HTMLElementEventMap)>(type: K, listener: (this: HTMLElement, ev: (ExtractEventTypes<Events> & HTMLElementEventMap)[K]) => any, options?: boolean | AddEventListenerOptions): void,
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void,
  removeEventListener<K extends keyof (ExtractEventTypes<Events> & HTMLElementEventMap)>(type: K, listener: (this: HTMLElement, ev: (ExtractEventTypes<Events> & HTMLElementEventMap)[K]) => any, options?: boolean | EventListenerOptions): void,
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void,
}

export type SetAttributes<Props> = {
  setAttribute<K extends keyof Props>(
    attr: K,
    value: Props[K] extends boolean ? '' : Props[K]
  ): void,
}

export type ReactifyEvents<T> = {
  [K in keyof T as K extends string ? `on${K}` : never]: T[K]
}

export type WebComponentReactBaseProp<T = HTMLElement> = Omit<DetailedHTMLProps<HTMLAttributes<T>, T>, 'className' | 'style'> & {
  class?: string,
}
