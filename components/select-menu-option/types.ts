import type { TSinchElementReact } from '../types'

export type TSinchSelectMenuOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Display text */
  text: string,
  /** Disabled state */
  disabled: boolean,
  matchesSearch(value: string): boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Display text */
  setAttribute(name: 'text', value: string): void,
  /** Disabled state */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSelectMenuOptionReact = TSinchElementReact<TSinchSelectMenuOptionElement> & {
  /** Value */
  value: string,
  /** Display text */
  text: string,
  /** Disabled state */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
} & {
  style?: {
    // Icon
    '--sinch-comp-select-menu-size-icon'?: string,

    // Font
    '--sinch-comp-select-menu-font-option'?: string,

    // Colors - Default State
    '--sinch-comp-select-menu-color-default-background-initial'?: string,
    '--sinch-comp-select-menu-color-default-background-selected'?: string,
    '--sinch-comp-select-menu-color-default-background-hover'?: string,
    '--sinch-comp-select-menu-color-default-option-initial'?: string,
    '--sinch-comp-select-menu-color-default-icon-initial'?: string,

    // Colors - Disabled State
    '--sinch-comp-select-menu-color-disabled-background-initial'?: string,
    '--sinch-comp-select-menu-color-disabled-option-initial'?: string,
    '--sinch-comp-select-menu-color-disabled-icon-initial'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
    '--sinch-global-size-icon'?: string,
  },
}
