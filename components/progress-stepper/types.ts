import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

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
