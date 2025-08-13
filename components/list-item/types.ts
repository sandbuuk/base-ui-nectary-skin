import type { NectaryComponentReactByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchListItemStyle = {
  // Default State Colors
  '--sinch-comp-list-color-default-background-initial'?: string,
  '--sinch-comp-list-color-default-background-hover'?: string,
  '--sinch-comp-list-color-default-border-initial'?: string,
}

export type TSinchListItem = {
  style: TSinchListItemStyle,
}

export type TSinchListItemElement = HTMLElement
export type TSinchListItemReact = NectaryComponentReactByType<TSinchListItemElement>

declare global {
  interface NectaryComponentMap {
    'sinch-list-item': TSinchListItem,
  }

  interface HTMLElementTagNameMap {
    'sinch-list-item': NectaryComponentVanilla<'sinch-list-item'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-list-item': NectaryComponentReact<'sinch-list-item'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-list-item': NectaryComponentReact<'sinch-list-item'>,
    }
  }
}
