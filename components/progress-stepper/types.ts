import type { TRect, TSinchElementReact } from '../types'

export type TSinchProgressStepperElement = HTMLElement & {
  /** Value */
  value: string,
  progressValue: string,
  nthOptionRect(index: number): TRect | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'progressvalue', value: string): void,
}

export type TSinchProgressStepperReact = TSinchElementReact<TSinchProgressStepperElement> & {
  /** Value */
  value: string,
  progressValue: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Change value event */
  'on-change'?: (e: CustomEvent<string>) => void,
}
