import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchCheckboxProps = {
  /** Identification for uncontrolled form submissions */
  name?: string,
  /** Value for uncontrolled form submissions, default: `on` if checked */
  value?: string,
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
}

export type TSinchCheckboxEvents = {
  /** Change value handler */
  '-change'?: (e: CustomEvent<boolean>) => void,
  /** Focus handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchCheckboxStyle = {
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
}

export type TSinchCheckbox = {
  props: TSinchCheckboxProps,
  events: TSinchCheckboxEvents,
  style: TSinchCheckboxStyle,
}

export type TSinchCheckboxElement = NectaryComponentVanillaByType<TSinchCheckbox>
export type TSinchCheckboxReact = NectaryComponentReactByType<TSinchCheckbox>

declare global {
  interface NectaryComponentMap {
    'sinch-checkbox': TSinchCheckbox,
  }

  interface HTMLElementTagNameMap {
    'sinch-checkbox': NectaryComponentVanilla<'sinch-checkbox'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-checkbox': NectaryComponentReact<'sinch-checkbox'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-checkbox': NectaryComponentReact<'sinch-checkbox'>,
    }
  }
}
