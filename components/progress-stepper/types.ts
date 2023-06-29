import type { TRect, TSinchElementReact } from '../types'

export type TSinchProgressStepperElement = HTMLElement & {
  /** Current selected item value */
  value: string,
  /** Current progress value */
  progressValue: string,
  nthOptionRect(index: number): TRect | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Current selected item value */
  setAttribute(name: 'value', value: string): void,
  /** Current progress value */
  setAttribute(name: 'progressvalue', value: string): void,
}

export type TSinchProgressStepperReact = TSinchElementReact<TSinchProgressStepperElement> & {
  /** Current selected item value */
  value: string,
  /** Current progress value */
  progressValue: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Change selected value event */
  'on-change'?: (e: CustomEvent<string>) => void,
}
