import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchVerticalStepperProps = {
  /** Current item index, starting from 1 */
  index: string,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchVerticalStepperStyle = {
  // Background Colors
  '--sinch-comp-vertical-stepper-color-background-default'?: string,
  '--sinch-comp-vertical-stepper-color-background-visited-skip'?: string,
  '--sinch-comp-vertical-stepper-color-background-active'?: string,
  '--sinch-comp-vertical-stepper-color-background-visited'?: string,
  '--sinch-comp-vertical-stepper-color-background-visited-error'?: string,

  // Border Colors
  '--sinch-comp-vertical-stepper-color-border-default'?: string,
  '--sinch-comp-vertical-stepper-color-border-visited-skip'?: string,
  '--sinch-comp-vertical-stepper-color-border-active'?: string,
  '--sinch-comp-vertical-stepper-color-border-visited'?: string,
  '--sinch-comp-vertical-stepper-color-border-visited-error'?: string,

  // Icon Colors
  '--sinch-comp-vertical-stepper-color-icon-default'?: string,
  '--sinch-comp-vertical-stepper-color-icon-visited-skip'?: string,
  '--sinch-comp-vertical-stepper-color-icon-active'?: string,
  '--sinch-comp-vertical-stepper-color-icon-visited'?: string,
  '--sinch-comp-vertical-stepper-color-icon-visited-error'?: string,

  // Text Colors
  '--sinch-comp-vertical-stepper-color-label'?: string,
  '--sinch-comp-vertical-stepper-color-description'?: string,

  // Progress Colors
  '--sinch-comp-vertical-stepper-color-progress'?: string,
  '--sinch-comp-vertical-stepper-color-progress-visited'?: string,
}

export type TSinchVerticalStepper = {
  props: TSinchVerticalStepperProps,
  style: TSinchVerticalStepperStyle,
}

export type TSinchVerticalStepperElement = NectaryComponentVanillaByType<TSinchVerticalStepper>
export type TSinchVerticalStepperReact = NectaryComponentReactByType<TSinchVerticalStepper>
