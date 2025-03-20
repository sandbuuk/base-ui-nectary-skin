import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchHorizontalStepperStatusType = 'error' | 'skip'

export type TSinchHorizontalStepperItemProps = {
  /** Label */
  label: string,
  /** Description */
  description?: string,
  /** Status */
  status?: TSinchHorizontalStepperStatusType,
}

export type TSinchHorizontalStepperItemStyle = {
  // Component Colors - Background
  '--sinch-comp-horizontal-stepper-color-background-default'?: string,
  '--sinch-comp-horizontal-stepper-color-background-active'?: string,
  '--sinch-comp-horizontal-stepper-color-background-visited'?: string,
  '--sinch-comp-horizontal-stepper-color-background-visited-error'?: string,
  '--sinch-comp-horizontal-stepper-color-background-visited-skip'?: string,

  // Component Colors - Border
  '--sinch-comp-horizontal-stepper-color-border-default'?: string,
  '--sinch-comp-horizontal-stepper-color-border-active'?: string,
  '--sinch-comp-horizontal-stepper-color-border-visited'?: string,
  '--sinch-comp-horizontal-stepper-color-border-visited-error'?: string,
  '--sinch-comp-horizontal-stepper-color-border-visited-skip'?: string,

  // Component Colors - Icon
  '--sinch-comp-horizontal-stepper-color-icon-default'?: string,
  '--sinch-comp-horizontal-stepper-color-icon-active'?: string,
  '--sinch-comp-horizontal-stepper-color-icon-visited'?: string,
  '--sinch-comp-horizontal-stepper-color-icon-visited-error'?: string,
  '--sinch-comp-horizontal-stepper-color-icon-visited-skip'?: string,

  // Component Colors - Text
  '--sinch-comp-horizontal-stepper-color-label'?: string,
  '--sinch-comp-horizontal-stepper-color-description'?: string,

  // System Fonts
  '--sinch-sys-font-desktop-title-s'?: string,

  // Global Properties
  '--sinch-global-size-icon'?: string,
  '--sinch-global-color-text'?: string,
}

export type TSinchHorizontalStepperItem = {
  props: TSinchHorizontalStepperItemProps,
  style: TSinchHorizontalStepperItemStyle,
}

export type TSinchHorizontalStepperItemElement = NectaryComponentVanillaByType<TSinchHorizontalStepperItem>
export type TSinchHorizontalStepperItemReact = NectaryComponentReactByType<TSinchHorizontalStepperItem>
