import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchDatePickerElement = HTMLElement & {
  /** Date value in ISO 8601 format */
  value: string,
  /** Date min limit in ISO 8601 format */
  min: string,
  /** Date max limit in ISO 8601 format */
  max: string,
  /** BCP 47 language tag (e.g. en-US), which changes day and month display names in the calendar */
  locale: string,
  readonly prevYearButtonRect: TRect,
  readonly nextYearButtonRect: TRect,
  readonly prevMonthButtonRect: TRect,
  readonly nextMonthButtonRect: TRect,
  nthButtonRect(index: number): TRect | null,
  /** Change value handler, return date in ISO 8601 format */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Date value in ISO 8601 format */
  setAttribute(name: 'value', value: string): void,
  /** Date min limit in ISO 8601 format */
  setAttribute(name: 'min', value: string): void,
  /** Date max limit in ISO 8601 format */
  setAttribute(name: 'max', value: string): void,
  /** BCP 47 language tag (e.g. en-US), which changes day and month display names in the calendar */
  setAttribute(name: 'locale', value: string): void,
}

export type TSinchDatePickerReact = TSinchElementReact<TSinchDatePickerElement> & {
  /** Date value in ISO 8601 format */
  value: string,
  /** Date min limit in ISO 8601 format */
  min: string,
  /** Date max limit in ISO 8601 format */
  max: string,
  /** BCP 47 language tag (e.g. en-US), which changes day and month display names in the calendar */
  locale: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Change value handler, return date in ISO 8601 format */
  onChange?: (e: SyntheticEvent<TSinchDatePickerElement, CustomEvent<string>>) => void,
  /** Change value handler, return date in ISO 8601 format */
  'on-change'?: (e: CustomEvent<string>) => void,
}
