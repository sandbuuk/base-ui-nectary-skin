import type { TSinchElementReact } from '../types'

export type TSinchHorizontalStepperElement = HTMLElement & {
  /** Current item index, starting from 1 */
  index: string,
  /** Current item index, starting from 1 */
  setAttribute(name: 'index', value: string): void,
}

export type TSinchHorizontalStepperReact = TSinchElementReact<TSinchHorizontalStepperElement> & {
  /** Current item index, starting from 1 */
  index: string,
  /** Label that is used for a11y */
  'aria-label': string,
} & {
  style?: {
    // Background Colors
    '--sinch-comp-horizontal-stepper-color-background-default'?: string,
    '--sinch-comp-horizontal-stepper-color-background-visited-skip'?: string,
    '--sinch-comp-horizontal-stepper-color-background-active'?: string,
    '--sinch-comp-horizontal-stepper-color-background-visited'?: string,
    '--sinch-comp-horizontal-stepper-color-background-visited-error'?: string,

    // Border Colors
    '--sinch-comp-horizontal-stepper-color-border-default'?: string,
    '--sinch-comp-horizontal-stepper-color-border-visited-skip'?: string,
    '--sinch-comp-horizontal-stepper-color-border-active'?: string,
    '--sinch-comp-horizontal-stepper-color-border-visited'?: string,
    '--sinch-comp-horizontal-stepper-color-border-visited-error'?: string,

    // Icon Colors
    '--sinch-comp-horizontal-stepper-color-icon-default'?: string,
    '--sinch-comp-horizontal-stepper-color-icon-visited-skip'?: string,
    '--sinch-comp-horizontal-stepper-color-icon-active'?: string,
    '--sinch-comp-horizontal-stepper-color-icon-visited'?: string,
    '--sinch-comp-horizontal-stepper-color-icon-visited-error'?: string,

    // Text Colors
    '--sinch-comp-horizontal-stepper-color-label'?: string,
    '--sinch-comp-horizontal-stepper-color-description'?: string,

    // Progress Colors
    '--sinch-comp-horizontal-stepper-color-progress'?: string,
    '--sinch-comp-horizontal-stepper-color-progress-visited'?: string,

    // System Colors
    '--sinch-sys-color-surface-tertiary-default'?: string,
    '--sinch-sys-color-basic-pure'?: string,
    '--sinch-sys-color-text-default'?: string,
    '--sinch-sys-color-text-muted'?: string,
    '--sinch-sys-color-feedback-danger-strong'?: string,

    // Reference Colors
    '--sinch-ref-color-neutral-350'?: string,
    '--sinch-ref-color-neutral-700'?: string,
    '--sinch-ref-color-neutral-900'?: string,
  },
}
