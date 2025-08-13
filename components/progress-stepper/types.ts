import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchProgressStepperProps = {
  /** Current selected item value */
  value: string,
  /** Current progress value */
  progressValue: string,
}

export type TSinchProgressStepperEvents = {
  /** Change selected value event */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchProgressStepper = {
  props: TSinchProgressStepperProps,
  events: TSinchProgressStepperEvents,
}

export type TSinchProgressStepperElement = NectaryComponentVanillaByType<TSinchProgressStepper>
export type TSinchProgressStepperReact = NectaryComponentReactByType<TSinchProgressStepper>

declare global {
  interface NectaryComponentMap {
    'sinch-progress-stepper': TSinchProgressStepper,
  }

  interface HTMLElementTagNameMap {
    'sinch-progress-stepper': NectaryComponentVanilla<'sinch-progress-stepper'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress-stepper': NectaryComponentReact<'sinch-progress-stepper'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-progress-stepper': NectaryComponentReact<'sinch-progress-stepper'>,
    }
  }
}
