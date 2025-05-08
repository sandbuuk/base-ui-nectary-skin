import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'
import type { TSinchSizeEx } from '../utils/size'

export type TSinchButtonFormType = 'submit' | 'reset' | 'button'
export type TSinchButtonType =
  | 'primary'
  | 'secondary'
  /** @deprecated */
  | 'tertiary'
  | 'subtle-primary'
  | 'subtle-secondary'
  | 'cta-primary'
  | 'cta-secondary'
  | 'destructive'

export type TSinchButtonProps = {
  /** Button Type */
  type?: TSinchButtonType,
  /** Size, `m` by default */
  size?: TSinchSizeEx,
  /** Text content */
  text?: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Disabled */
  disabled?: boolean,
  /** Toggled (pressed) */
  toggled?: boolean,
  /** Makes button participate in forms, `button` by default */
  'form-type'?: TSinchButtonFormType,
}

export type TSinchButtonEvents = {
  /** Click event handler */
  '-click'?: (e: CustomEvent<void>) => void,
  /** Focus event handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur event handler */
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchButtonStyle = {
  // Shapes
  '--sinch-comp-button-shape-radius-size-xs'?: string,
  '--sinch-comp-button-shape-radius-size-s'?: string,
  '--sinch-comp-button-shape-radius-size-m'?: string,
  '--sinch-comp-button-shape-radius-size-l'?: string,

  // Sizes
  '--sinch-comp-button-size-container-xs'?: string,
  '--sinch-comp-button-size-container-s'?: string,
  '--sinch-comp-button-size-container-m'?: string,
  '--sinch-comp-button-size-container-l'?: string,
  '--sinch-comp-button-size-icon-xs'?: string,
  '--sinch-comp-button-size-icon-s'?: string,
  '--sinch-comp-button-size-icon-m'?: string,
  '--sinch-comp-button-size-icon-l'?: string,

  // Fonts
  '--sinch-comp-button-font-size-s-text'?: string,
  '--sinch-comp-button-font-size-m-text'?: string,
  '--sinch-comp-button-font-size-l-text'?: string,

  // Primary Button Colors
  '--sinch-comp-button-color-primary-default-background-initial'?: string,
  '--sinch-comp-button-color-primary-default-background-hover'?: string,
  '--sinch-comp-button-color-primary-default-background-active'?: string,
  '--sinch-comp-button-color-primary-default-border-initial'?: string,
  '--sinch-comp-button-color-primary-default-text-initial'?: string,
  '--sinch-comp-button-color-primary-default-icon-initial'?: string,
  '--sinch-comp-button-color-primary-default-outline-focus'?: string,
  '--sinch-comp-button-color-primary-disabled-background-initial'?: string,
  '--sinch-comp-button-color-primary-disabled-border-initial'?: string,
  '--sinch-comp-button-color-primary-disabled-text-initial'?: string,
  '--sinch-comp-button-color-primary-disabled-icon-initial'?: string,

  // Secondary Button Colors
  '--sinch-comp-button-color-secondary-default-background-initial'?: string,
  '--sinch-comp-button-color-secondary-default-background-hover'?: string,
  '--sinch-comp-button-color-secondary-default-background-active'?: string,
  '--sinch-comp-button-color-secondary-default-border-initial'?: string,
  '--sinch-comp-button-color-secondary-default-text-initial'?: string,
  '--sinch-comp-button-color-secondary-default-icon-initial'?: string,
  '--sinch-comp-button-color-secondary-default-outline-focus'?: string,
  '--sinch-comp-button-color-secondary-disabled-background-initial'?: string,
  '--sinch-comp-button-color-secondary-disabled-border-initial'?: string,
  '--sinch-comp-button-color-secondary-disabled-text-initial'?: string,
  '--sinch-comp-button-color-secondary-disabled-icon-initial'?: string,

  // Subtle Primary Button Colors
  '--sinch-comp-button-color-subtle-primary-default-background-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-default-background-hover'?: string,
  '--sinch-comp-button-color-subtle-primary-default-background-active'?: string,
  '--sinch-comp-button-color-subtle-primary-default-border-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-default-text-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-default-icon-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-default-outline-focus'?: string,
  '--sinch-comp-button-color-subtle-primary-disabled-background-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-disabled-border-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-disabled-text-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-disabled-icon-initial'?: string,
  '--sinch-comp-button-color-subtle-primary-toggled-background-initial'?: string,

  // Subtle Secondary Button Colors
  '--sinch-comp-button-color-subtle-secondary-default-background-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-default-background-hover'?: string,
  '--sinch-comp-button-color-subtle-secondary-default-background-active'?: string,
  '--sinch-comp-button-color-subtle-secondary-default-border-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-default-text-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-default-icon-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-default-outline-focus'?: string,
  '--sinch-comp-button-color-subtle-secondary-disabled-background-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-disabled-border-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-disabled-text-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-disabled-icon-initial'?: string,
  '--sinch-comp-button-color-subtle-secondary-toggled-background-initial'?: string,

  // CTA Primary Button Colors
  '--sinch-comp-button-color-cta-primary-default-background-initial'?: string,
  '--sinch-comp-button-color-cta-primary-default-background-hover'?: string,
  '--sinch-comp-button-color-cta-primary-default-background-active'?: string,
  '--sinch-comp-button-color-cta-primary-default-border-initial'?: string,
  '--sinch-comp-button-color-cta-primary-default-text-initial'?: string,
  '--sinch-comp-button-color-cta-primary-default-icon-initial'?: string,
  '--sinch-comp-button-color-cta-primary-default-outline-focus'?: string,
  '--sinch-comp-button-color-cta-primary-disabled-background-initial'?: string,
  '--sinch-comp-button-color-cta-primary-disabled-border-initial'?: string,
  '--sinch-comp-button-color-cta-primary-disabled-text-initial'?: string,
  '--sinch-comp-button-color-cta-primary-disabled-icon-initial'?: string,

  // CTA Secondary Button Colors
  '--sinch-comp-button-color-cta-secondary-default-background-initial'?: string,
  '--sinch-comp-button-color-cta-secondary-default-background-hover'?: string,
  '--sinch-comp-button-color-cta-secondary-default-background-active'?: string,
  '--sinch-comp-button-color-cta-secondary-default-border-initial'?: string,
  '--sinch-comp-button-color-cta-secondary-default-text-initial'?: string,
  '--sinch-comp-button-color-cta-secondary-default-icon-initial'?: string,
  '--sinch-comp-button-color-cta-secondary-default-outline-focus'?: string,
  '--sinch-comp-button-color-cta-secondary-disabled-background-initial'?: string,
  '--sinch-comp-button-color-cta-secondary-disabled-border-initial'?: string,
  '--sinch-comp-button-color-cta-secondary-disabled-text-initial'?: string,
  '--sinch-comp-button-color-cta-secondary-disabled-icon-initial'?: string,

  // Danger Button Colors
  '--sinch-comp-button-color-danger-default-background-initial'?: string,
  '--sinch-comp-button-color-danger-default-background-hover'?: string,
  '--sinch-comp-button-color-danger-default-background-active'?: string,
  '--sinch-comp-button-color-danger-default-border-initial'?: string,
  '--sinch-comp-button-color-danger-default-text-initial'?: string,
  '--sinch-comp-button-color-danger-default-icon-initial'?: string,
  '--sinch-comp-button-color-danger-disabled-background-initial'?: string,
  '--sinch-comp-button-color-danger-disabled-border-initial'?: string,
  '--sinch-comp-button-color-danger-disabled-text-initial'?: string,
  '--sinch-comp-button-color-danger-disabled-icon-initial'?: string,

  // Shadows
  '--sinch-comp-button-shadow-primary-initial'?: string,
  '--sinch-comp-button-shadow-primary-hover'?: string,
  '--sinch-comp-button-shadow-primary-active'?: string,
  '--sinch-comp-button-shadow-primary-focus'?: string,
  '--sinch-comp-button-shadow-primary-disabled'?: string,
  '--sinch-comp-button-shadow-secondary-initial'?: string,
  '--sinch-comp-button-shadow-secondary-hover'?: string,
  '--sinch-comp-button-shadow-secondary-focus'?: string,
  '--sinch-comp-button-shadow-secondary-disabled'?: string,
  '--sinch-comp-button-shadow-subtle-initial'?: string,
  '--sinch-comp-button-shadow-subtle-hover'?: string,
  '--sinch-comp-button-shadow-subtle-active'?: string,
  '--sinch-comp-button-shadow-subtle-focus'?: string,
  '--sinch-comp-button-shadow-subtle-disabled'?: string,
  '--sinch-comp-button-shadow-cta-primary-initial'?: string,
  '--sinch-comp-button-shadow-cta-primary-hover'?: string,
  '--sinch-comp-button-shadow-cta-primary-active'?: string,
  '--sinch-comp-button-shadow-cta-primary-focus'?: string,
  '--sinch-comp-button-shadow-cta-primary-disabled'?: string,
  '--sinch-comp-button-shadow-cta-secondary-initial'?: string,
  '--sinch-comp-button-shadow-cta-secondary-hover'?: string,
  '--sinch-comp-button-shadow-cta-secondary-active'?: string,
  '--sinch-comp-button-shadow-cta-secondary-focus'?: string,
  '--sinch-comp-button-shadow-cta-secondary-disabled'?: string,
  '--sinch-comp-button-shadow-danger-initial'?: string,
  '--sinch-comp-button-shadow-danger-hover'?: string,
  '--sinch-comp-button-shadow-danger-active'?: string,
  '--sinch-comp-button-shadow-danger-focus'?: string,

  // Global Properties
  '--sinch-global-color-text'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
}

export type TSinchButton = {
  props: TSinchButtonProps,
  events: TSinchButtonEvents,
  style: TSinchButtonStyle,
}

export type TSinchButtonElement = NectaryComponentVanillaByType<TSinchButton>
export type TSinchButtonReact = NectaryComponentReactByType<TSinchButton>
