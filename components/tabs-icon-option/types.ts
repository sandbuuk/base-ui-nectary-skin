import type { TSinchElementReact } from '../types'

export type TSinchTabsIconOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Disabled */
  disabled: boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchTabsIconOptionReact = TSinchElementReact<TSinchTabsIconOptionElement> & {
  /** Value */
  value: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
} & {
  style?: {
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
  },
}
