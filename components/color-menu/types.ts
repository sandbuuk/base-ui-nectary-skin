import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'

export type TSinchColorMenuProps = {
  /** Value */
  value: string,
  /** How many rows to show and scroll the rest */
  rows?: number,
  /** How many cols to show and scroll the rest */
  cols?: number,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchColorMenuMethods = {
  nthItemRect(index: number): TRect | null,
}

export type TSinchColorMenuEvents = {
  /** Change event handler */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchColorMenu = {
  props: TSinchColorMenuProps,
  events: TSinchColorMenuEvents,
  methods: TSinchColorMenuMethods,
}

export type TSinchColorMenuElement = NectaryComponentVanillaByType<TSinchColorMenu>
export type TSinchColorMenuReact = NectaryComponentReactByType<TSinchColorMenu>
