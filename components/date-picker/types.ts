import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchDatePickerElement = HTMLElement & {
  value: string,
  min: string,
  max: string,
  locale: string,
  readonly prevYearButtonRect: TRect,
  readonly nextYearButtonRect: TRect,
  readonly prevMonthButtonRect: TRect,
  readonly nextMonthButtonRect: TRect,
  nthButtonRect(index: number): TRect | null,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'min', value: string): void,
  setAttribute(name: 'max', value: string): void,
  setAttribute(name: 'locale', value: string): void,
}

export type TSinchDatePickerReact = TSinchElementReact<TSinchDatePickerElement> & {
  locale: string,
  value: string,
  min: string,
  max: string,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchDatePickerElement, CustomEvent<string>>) => void,
}
