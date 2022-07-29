import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTimePickerElement = HTMLElement & {
  value: string,
  ampm: boolean,
  readonly submitButtonRect: TRect,
  readonly amButtonRect: TRect | null,
  readonly pmButtonRect: TRect | null,
  hourDigitRect(hour: number): TRect | null,
  minuteDigitRect(minute: number): TRect | null,
  /** Change value handler, return time in ISO 8601 format */
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'ampm', value: boolean): void,
}

export type TSinchTimePickerReact = TSinchElementReact<TSinchTimePickerElement> & {
  value: string,
  ampm?: boolean,
  'aria-label': string,
  'submit-aria-label': string,
  onChange: (e: SyntheticEvent<TSinchTimePickerElement, CustomEvent<string>>) => void,
}
