import type { TSinchElementReact } from '../types'

export type TSinchActionMenuOptionElement = HTMLElement & {
  /** Display text */
  text: string,
  /** Disabled state */
  disabled: boolean,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Display text */
  setAttribute(name: 'text', value: string): void,
  /** Disabled state */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchActionMenuOptionReact = TSinchElementReact<TSinchActionMenuOptionElement> & {
  /** Display text */
  text: string,
  /** Disabled state */
  disabled?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Click event handler */
  'on-click'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
    // Colors - Default State
    '--sinch-comp-action-menu-color-default-background-initial'?: string,
    '--sinch-comp-action-menu-color-default-background-selected'?: string,
    '--sinch-comp-action-menu-color-default-background-hover'?: string,
    '--sinch-comp-action-menu-color-default-text-initial'?: string,
    '--sinch-comp-action-menu-color-default-icon-initial'?: string,

    // Colors - Disabled State
    '--sinch-comp-action-menu-color-disabled-background-initial'?: string,
    '--sinch-comp-action-menu-color-disabled-text-initial'?: string,
    '--sinch-comp-action-menu-color-disabled-icon-initial'?: string,

    // Fonts
    '--sinch-comp-action-menu-font-option'?: string,

    // Sizes
    '--sinch-comp-action-menu-size-icon'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
    '--sinch-global-size-icon'?: string,
    '--sinch-comp-text-font'?: string,
  },
}
