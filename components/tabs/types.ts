import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

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

declare global {
  interface NectaryComponentMap {
    'sinch-tabs': TSinchTabs,
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs': NectaryComponentVanilla<'sinch-tabs'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-tabs': NectaryComponentReact<'sinch-tabs'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-tabs': NectaryComponentReact<'sinch-tabs'>,
    }
  }
}
