import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTabsIconOptionProps = {
  /** Value */
  value: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
}

export type TSinchTabsIconOptionStyle = {
  // Size
  '--sinch-comp-tab-size-icon'?: string,

  // Shape
  '--sinch-comp-tab-shape-radius'?: string,

  // Colors - Default State
  '--sinch-comp-tab-color-default-background-initial'?: string,
  '--sinch-comp-tab-color-default-background-hover'?: string,
  '--sinch-comp-tab-color-default-icon-initial'?: string,
  '--sinch-comp-tab-color-default-outline-focus'?: string,

  // Colors - Checked State
  '--sinch-comp-tab-color-checked-icon-initial'?: string,
  '--sinch-comp-tab-color-checked-border-initial'?: string,

  // Colors - Disabled State
  '--sinch-comp-tab-color-disabled-icon-initial'?: string,

  // Global Properties
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
}

export type TSinchTabsIconOption = {
  props: TSinchTabsIconOptionProps,
  style: TSinchTabsIconOptionStyle,
}

export type TSinchTabsIconOptionElement = NectaryComponentVanillaByType<TSinchTabsIconOption>
export type TSinchTabsIconOptionReact = NectaryComponentReactByType<TSinchTabsIconOption>

declare global {
  interface NectaryComponentMap {
    'sinch-tabs-icon-option': TSinchTabsIconOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-tabs-icon-option': NectaryComponentVanilla<'sinch-tabs-icon-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-tabs-icon-option': NectaryComponentReact<'sinch-tabs-icon-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-tabs-icon-option': NectaryComponentReact<'sinch-tabs-icon-option'>,
    }
  }
}
