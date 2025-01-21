import type { TSinchElementReact } from '../types'

export type TSinchHorizontalStepperStatusType = 'error' | 'skip'

export type TSinchHorizontalStepperItemElement = HTMLElement & {
  /** Label */
  label: string,
  /** Description */
  description: string | null,
  /** Status */
  status: TSinchHorizontalStepperStatusType | null,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Description */
  setAttribute(name: 'description', value: string): void,
  /** Status */
  setAttribute(name: 'status', value: TSinchHorizontalStepperStatusType): void,
}

export type TSinchHorizontalStepperItemReact = TSinchElementReact<TSinchHorizontalStepperItemElement> & {
  /** Label */
  label: string,
  /** Description */
  description?: string,
  /** Status */
  status?: TSinchHorizontalStepperStatusType,
} & {
  style?: {
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
  },
}
