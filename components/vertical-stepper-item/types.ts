import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchVerticalStepperStatusType = 'error' | 'skip'

export type TSinchVerticalStepperItemProps = {
  /** Label */
  label: string,
  /** Description */
  description?: string,
  /** Status */
  status?: TSinchVerticalStepperStatusType,
}

export type TSinchVerticalStepperItemStyle = {
  // Background Colors
  '--sinch-comp-vertical-stepper-color-background-default'?: string,
  '--sinch-comp-vertical-stepper-color-background-active'?: string,
  '--sinch-comp-vertical-stepper-color-background-visited'?: string,
  '--sinch-comp-vertical-stepper-color-background-visited-error'?: string,
  '--sinch-comp-vertical-stepper-color-background-visited-skip'?: string,

  // Border Colors
  '--sinch-comp-vertical-stepper-color-border-default'?: string,
  '--sinch-comp-vertical-stepper-color-border-active'?: string,
  '--sinch-comp-vertical-stepper-color-border-visited'?: string,
  '--sinch-comp-vertical-stepper-color-border-visited-error'?: string,
  '--sinch-comp-vertical-stepper-color-border-visited-skip'?: string,

  // Icon Colors
  '--sinch-comp-vertical-stepper-color-icon-default'?: string,
  '--sinch-comp-vertical-stepper-color-icon-active'?: string,
  '--sinch-comp-vertical-stepper-color-icon-visited'?: string,
  '--sinch-comp-vertical-stepper-color-icon-visited-error'?: string,
  '--sinch-comp-vertical-stepper-color-icon-visited-skip'?: string,

  // Text Colors
  '--sinch-comp-vertical-stepper-color-label'?: string,
  '--sinch-comp-vertical-stepper-color-description'?: string,

  // Progress Colors
  '--sinch-comp-vertical-stepper-color-progress'?: string,
  '--sinch-comp-vertical-stepper-color-progress-visited'?: string,

  // Local Variables
  '--sinch-local-color-background'?: string,
  '--sinch-local-color-border'?: string,
  '--sinch-local-color-text'?: string,
  '--sinch-local-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
}

export type TSinchVerticalStepperItem = {
  props: TSinchVerticalStepperItemProps,
  style: TSinchVerticalStepperItemStyle,
}

export type TSinchVerticalStepperItemElement = NectaryComponentVanillaByType<TSinchVerticalStepperItem>
export type TSinchVerticalStepperItemReact = NectaryComponentReactByType<TSinchVerticalStepperItem>
