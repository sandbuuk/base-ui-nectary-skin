import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchColorMenuOptionProps = {
  /** Value */
  value: string,
}

export type TSinchColorMenuOptionStyle = {
  // Colors - Default State
  '--sinch-comp-color-menu-option-color-default-border-initial'?: string,
  '--sinch-comp-color-menu-option-color-default-border-selected'?: string,
  '--sinch-comp-color-menu-option-color-default-border-focus'?: string,
  '--sinch-comp-color-menu-option-color-default-border-hover'?: string,
  '--sinch-comp-color-menu-option-color-default-border-active'?: string,
}

export type TSinchColorMenuOption = {
  props: TSinchColorMenuOptionProps,
  style: TSinchColorMenuOptionStyle,
}

export type TSinchColorMenuOptionElement = NectaryComponentVanillaByType<TSinchColorMenuOption>
export type TSinchColorMenuOptionReact = NectaryComponentReactByType<TSinchColorMenuOption>

declare global {
  interface NectaryComponentMap {
    'sinch-color-menu-option': TSinchColorMenuOption,
  }

  interface HTMLElementTagNameMap {
    'sinch-color-menu-option': NectaryComponentVanilla<'sinch-color-menu-option'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-color-menu-option': NectaryComponentReact<'sinch-color-menu-option'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-color-menu-option': NectaryComponentReact<'sinch-color-menu-option'>,
    }
  }
}
