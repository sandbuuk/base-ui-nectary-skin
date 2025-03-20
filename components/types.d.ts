import type { ClassAttributes, DOMAttributes, HTMLAttributes } from 'react'
import type { ReactifyEvents, ReactifyElement, SafeSelect, CamelCaseify, RemoveReadonly, SetAttributes, ExtendEventListeners } from './utils/adapters'

export type TRect = {
  x: number,
  y: number,
  width: number,
  height: number,
}

export type NectaryComponentVanillaByType<T extends object> =
  Omit<HTMLElement, 'addEventListener' | 'removeEventListener'> &
  ExtendEventListeners<Required<SafeSelect<T, 'events'>>> &
  SetAttributes<Required<RemoveReadonly<SafeSelect<T, 'props'>>>> &
  Required<CamelCaseify<SafeSelect<T, 'props'>>> &
  Required<SafeSelect<T, 'methods'>>

export type NectaryComponentReactByType<T extends object> =
  ReactifyElement<HTMLElement> &
  ReactifyEvents<SafeSelect<T, 'events'>> &
  RemoveReadonly<SafeSelect<T, 'props'>> &
  { style?: SafeSelect<T, 'style'> }

export type NectaryComponentVanilla<K extends keyof NectaryComponentMap> =
  NectaryComponentVanillaByType<NectaryComponentMap[K]>

export type NectaryComponentReact<K extends keyof NectaryComponentMap> =
  NectaryComponentReactByType<NectaryComponentMap[K]>