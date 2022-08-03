import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTimePickerElement = HTMLElement & {
  /** Time value in ISO 8601 format */
  value: string,
  /** AM/PM 12-hour clock system, `false` by default */
  ampm: boolean,
  readonly submitButtonRect: TRect,
  readonly amButtonRect: TRect | null,
  readonly pmButtonRect: TRect | null,
  hourDigitRect(hour: number): TRect | null,
  minuteDigitRect(minute: number): TRect | null,
  /** Change value handler, return time in ISO 8601 format */
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  /** Time value in ISO 8601 format */
  setAttribute(name: 'value', value: string): void,
  /** AM/PM 12-hour clock system, `false` by default */
  setAttribute(name: 'ampm', value: boolean): void,
}

export type TSinchTimePickerReact = TSinchElementReact<TSinchTimePickerElement> & {
  /** Time value in ISO 8601 format */
  value: string,
  /** AM/PM 12-hour clock system, `false` by default */
  ampm?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Submit button label that is used for a11y */
  'submit-aria-label': string,
  /** Change value handler, return time in ISO 8601 format */
  onChange: (e: SyntheticEvent<TSinchTimePickerElement, CustomEvent<string>>) => void,
}
