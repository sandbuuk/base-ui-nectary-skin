import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchProgressStepperItemProps = {
  /** Value */
  value: string,
  /** Text */
  text: string,
  /** Invalid */
  invalid?: boolean,
}

export type TSinchProgressStepperItemStyle = {
  // Shape
  '--sinch-comp-progress-stepper-step-shape-radius'?: string,

  // Colors - Incomplete State
  '--sinch-comp-progress-stepper-step-color-incomplete-background-hover'?: string,
  '--sinch-comp-progress-stepper-step-color-incomplete-label-default'?: string,
  '--sinch-comp-progress-stepper-step-color-incomplete-current-label-default'?: string,
  '--sinch-comp-progress-stepper-step-color-incomplete-progress-background'?: string,
  '--sinch-comp-progress-stepper-step-color-incomplete-progress-bar'?: string,

  // Colors - Complete State
  '--sinch-comp-progress-stepper-step-color-complete-background-hover'?: string,
  '--sinch-comp-progress-stepper-step-color-complete-label-default'?: string,
  '--sinch-comp-progress-stepper-step-color-complete-current-label-default'?: string,
  '--sinch-comp-progress-stepper-step-color-complete-progress-background'?: string,
  '--sinch-comp-progress-stepper-step-color-complete-progress-bar'?: string,

  // Colors - Invalid State
  '--sinch-comp-progress-stepper-step-color-invalid-background-hover'?: string,
  '--sinch-comp-progress-stepper-step-color-invalid-label-default'?: string,
  '--sinch-comp-progress-stepper-step-color-invalid-icon-default'?: string,
  '--sinch-comp-progress-stepper-step-color-invalid-progress-background'?: string,

  // Colors - Inactive State
  '--sinch-comp-progress-stepper-step-color-inactive-label-default'?: string,
  '--sinch-comp-progress-stepper-step-color-inactive-progress-background'?: string,

  // Colors - Focus State
  '--sinch-comp-progress-stepper-step-color-outline-focus'?: string,

  // Fonts
  '--sinch-comp-progress-stepper-step-font-incomplete-label'?: string,
  '--sinch-comp-progress-stepper-step-font-complete-label'?: string,
  '--sinch-comp-progress-stepper-step-font-inactive-label'?: string,
  '--sinch-comp-progress-stepper-step-font-invalid-label'?: string,
  '--sinch-comp-progress-stepper-step-font-incomplete-current-label'?: string,
  '--sinch-comp-progress-stepper-step-font-complete-current-label'?: string,
  '--sinch-comp-progress-stepper-step-font-invalid-current-label'?: string,
}

export type TSinchProgressStepperItem = {
  props: TSinchProgressStepperItemProps,
  style: TSinchProgressStepperItemStyle,
}

export type TSinchProgressStepperItemElement = NectaryComponentVanillaByType<TSinchProgressStepperItem>
export type TSinchProgressStepperItemReact = NectaryComponentReactByType<TSinchProgressStepperItem>
