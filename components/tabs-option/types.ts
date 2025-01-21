import type { TSinchElementReact } from '../types'

export type TSinchTabsOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Disabled */
  disabled: boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchTabsOptionReact = TSinchElementReact<TSinchTabsOptionElement> & {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
} & {
  style?: {
    // Font
    '--sinch-comp-tab-font-label'?: string,

    // Size
    '--sinch-comp-tab-size-icon'?: string,

    // Shape
    '--sinch-comp-tab-shape-radius'?: string,

    // Colors - Default State
    '--sinch-comp-tab-color-default-background-initial'?: string,
    '--sinch-comp-tab-color-default-background-hover'?: string,
    '--sinch-comp-tab-color-default-text-initial'?: string,
    '--sinch-comp-tab-color-default-icon-initial'?: string,
    '--sinch-comp-tab-color-default-outline-focus'?: string,

    // Colors - Checked State
    '--sinch-comp-tab-color-checked-text-initial'?: string,
    '--sinch-comp-tab-color-checked-icon-initial'?: string,
    '--sinch-comp-tab-color-checked-border-initial'?: string,

    // Colors - Disabled State
    '--sinch-comp-tab-color-disabled-text-initial'?: string,
    '--sinch-comp-tab-color-disabled-icon-initial'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
    '--sinch-global-size-icon'?: string,
  },
}
