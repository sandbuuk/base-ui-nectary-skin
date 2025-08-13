import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchSelectMenuProps = {
  /** Identification for uncontrolled form submissions */
  name?: string,
  /** Selected value, CSV when multiple */
  value: string,
  /** How many rows to show and scroll the rest */
  rows?: number,
  /** Allows multiple selection */
  multiple?: boolean,
  /** Enforce the search bar appearing, by default it appears above a certain number of options  */
  searchable?: boolean | null,
  /** Controls the autocomplete of the search input */
  'search-autocomplete'?: HTMLInputElement['autocomplete'],
  /** Text for search bar's placeholder */
  'search-placeholder'?: string,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchSelectMenuEvents = {
  /** Change value handler */
  '-search-change'?: (e: CustomEvent<string>) => void,
  /** Change value handler */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchSelectMenuStyle = {
  // Colors - Default State
  '--sinch-comp-select-menu-color-default-title-initial'?: string,
  '--sinch-comp-select-menu-color-default-not-found-text-initial'?: string,

  // Fonts
  '--sinch-comp-select-menu-font-not-found-text'?: string,

  // Sizes
  '--sinch-comp-select-menu-font-max-height'?: string,
}

export type TSinchSelectMenu = {
  props: TSinchSelectMenuProps,
  events: TSinchSelectMenuEvents,
  style: TSinchSelectMenuStyle,
}

export type TSinchSelectMenuElement = NectaryComponentVanillaByType<TSinchSelectMenu>
export type TSinchSelectMenuReact = NectaryComponentReactByType<TSinchSelectMenu>

declare global {
  interface NectaryComponentMap {
    'sinch-select-menu': TSinchSelectMenu,
  }

  interface HTMLElementTagNameMap {
    'sinch-select-menu': NectaryComponentVanilla<'sinch-select-menu'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-select-menu': NectaryComponentReact<'sinch-select-menu'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-select-menu': NectaryComponentReact<'sinch-select-menu'>,
    }
  }
}
