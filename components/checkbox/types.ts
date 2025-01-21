import type { TSinchElementReact } from '../types'

export type TSinchCheckboxElement = HTMLElement & {
  /** Value */
  checked: boolean,
  /** Indeterminate */
  indeterminate: boolean,
  /** Disabled */
  disabled: boolean,
  /** Invalid */
  invalid: boolean,
  /** Text */
  text: string | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Checked */
  setAttribute(name: 'checked', value: ''): void,
  /** Indeterminate */
  setAttribute(name: 'indeterminate', value: ''): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Invalid */
  setAttribute(name: 'invalid', value: ''): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
}

export type TSinchCheckboxReact = TSinchElementReact<TSinchCheckboxElement> & {
  /** Checked */
  checked?: boolean,
  /** Indeterminate */
  indeterminate?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** Invalid */
  invalid?: boolean,
  /** Text */
  text?: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<boolean>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
    // Shapes
    '--sinch-comp-checkbox-shape-radius'?: string,

    // Fonts
    '--sinch-comp-checkbox-font-label'?: string,

    // Colors - Default State
    '--sinch-comp-checkbox-color-default-background-initial'?: string,
    '--sinch-comp-checkbox-color-default-background-hover'?: string,
    '--sinch-comp-checkbox-color-default-background-active'?: string,
    '--sinch-comp-checkbox-color-default-border-initial'?: string,
    '--sinch-comp-checkbox-color-default-border-hover'?: string,
    '--sinch-comp-checkbox-color-default-border-active'?: string,
    '--sinch-comp-checkbox-color-default-text-initial'?: string,
    '--sinch-comp-checkbox-color-default-outline-focus'?: string,

    // Colors - Invalid State
    '--sinch-comp-checkbox-color-invalid-background-initial'?: string,
    '--sinch-comp-checkbox-color-invalid-background-hover'?: string,
    '--sinch-comp-checkbox-color-invalid-background-active'?: string,
    '--sinch-comp-checkbox-color-invalid-border-initial'?: string,
    '--sinch-comp-checkbox-color-invalid-border-hover'?: string,
    '--sinch-comp-checkbox-color-invalid-border-active'?: string,
    '--sinch-comp-checkbox-color-invalid-text-initial'?: string,

    // Colors - Checked State
    '--sinch-comp-checkbox-color-checked-background-initial'?: string,
    '--sinch-comp-checkbox-color-checked-background-hover'?: string,
    '--sinch-comp-checkbox-color-checked-background-active'?: string,
    '--sinch-comp-checkbox-color-checked-border-initial'?: string,
    '--sinch-comp-checkbox-color-checked-border-hover'?: string,
    '--sinch-comp-checkbox-color-checked-border-active'?: string,

    // Colors - Disabled State
    '--sinch-comp-checkbox-color-disabled-background-initial'?: string,
    '--sinch-comp-checkbox-color-disabled-border-initial'?: string,
    '--sinch-comp-checkbox-color-disabled-text-initial'?: string,

    // Colors - Checked Disabled State
    '--sinch-comp-checkbox-color-checked-disabled-background-initial'?: string,
    '--sinch-comp-checkbox-color-checked-disabled-border-initial'?: string,

    // System Colors
    '--sinch-sys-color-surface-primary-default'?: string,
  },
}
