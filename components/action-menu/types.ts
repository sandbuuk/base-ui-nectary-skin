import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchActionMenuProps = {
  /** How many rows to show and scroll the rest */
  rows?: number,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchActionMenu = {
  props: TSinchActionMenuProps,
}

export type TSinchActionMenuElement = NectaryComponentVanillaByType<TSinchActionMenu>
export type TSinchActionMenuReact = NectaryComponentReactByType<TSinchActionMenu>

declare global {
  interface NectaryComponentMap {
    'sinch-action-menu': TSinchActionMenu,
  }

  interface HTMLElementTagNameMap {
    'sinch-action-menu': NectaryComponentVanilla<'sinch-action-menu'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-action-menu': NectaryComponentReact<'sinch-action-menu'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-action-menu': NectaryComponentReact<'sinch-action-menu'>,
    }
  }
}
