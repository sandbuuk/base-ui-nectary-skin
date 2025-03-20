import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'

export type TSinchTabsProps = {
  /** Value */
  value: string,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchTabsMethods = {
  nthOptionRect(index: number): TRect | null,
}

export type TSinchTabsEvents = {
  /** Change value event */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchTabsStyle = {
  // Colors - Default State
  '--sinch-comp-tab-color-default-border-initial'?: string,
}

export type TSinchTabs = {
  props: TSinchTabsProps,
  methods: TSinchTabsMethods,
  events: TSinchTabsEvents,
  style: TSinchTabsStyle,
}

export type TSinchTabsElement = NectaryComponentVanillaByType<TSinchTabs>
export type TSinchTabsReact = NectaryComponentReactByType<TSinchTabs>
