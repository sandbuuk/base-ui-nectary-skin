import type { TRect, TSinchElementReact } from '../types'

export type TSinchTimePickerElement = HTMLElement & {
  /** Time value in ISO 8601 format */
  value: string,
  /** AM/PM 12-hour clock system, `false` by default */
  ampm: boolean,
  /** Submit button label that is used for a11y */
  submitAriaLabel: string,
  readonly submitButtonRect: TRect,
  readonly amButtonRect: TRect | null,
  readonly pmButtonRect: TRect | null,
  hourDigitRect(hour: number): TRect | null,
  minuteDigitRect(minute: number): TRect | null,
  /** Change value handler, return time in ISO 8601 format */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Time value in ISO 8601 format */
  setAttribute(name: 'value', value: string): void,
  /** AM/PM 12-hour clock system, `false` by default */
  setAttribute(name: 'ampm', value: boolean): void,
  /** Submit button label that is used for a11y */
  setAttribute(name: 'submit-aria-label', value: string): void,
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
  'on-change'?: (e: CustomEvent<string>) => void,
} & {
  style?: {
    // Fonts
    '--sinch-comp-time-picker-header-font'?: string,
    '--sinch-comp-time-picker-digit-font-default-h12'?: string,
    '--sinch-comp-time-picker-digit-font-checked-h12'?: string,
    '--sinch-comp-time-picker-digit-font-default-h24'?: string,
    '--sinch-comp-time-picker-digit-font-checked-h24'?: string,
    '--sinch-comp-time-picker-digit-font-default-minutes'?: string,
    '--sinch-comp-time-picker-digit-font-checked-minutes'?: string,

    // Colors - Header
    '--sinch-comp-time-picker-header-color-default-text-initial'?: string,
    '--sinch-comp-time-picker-header-color-default-icon-initial'?: string,

    // Colors - Watch Face
    '--sinch-comp-time-picker-watch-face-color-default-border-initial'?: string,
    '--sinch-comp-time-picker-watch-face-color-default-background-initial'?: string,

    // Colors - Digits - Hours (12h)
    '--sinch-comp-time-picker-digit-color-default-h12-initial'?: string,
    '--sinch-comp-time-picker-digit-color-checked-h12-default'?: string,

    // Colors - Digits - Hours (24h)
    '--sinch-comp-time-picker-digit-color-default-h24-initial'?: string,
    '--sinch-comp-time-picker-digit-color-checked-h24-initial'?: string,

    // Colors - Digits - Minutes
    '--sinch-comp-time-picker-digit-color-default-minute-initial'?: string,
    '--sinch-comp-time-picker-digit-color-checked-minute-initial'?: string,

    // Colors - Needle
    '--sinch-comp-time-picker-needle-color-default-background-initial'?: string,
    '--sinch-comp-time-picker-needle-color-default-background-focus'?: string,

    // Global Properties
    '--sinch-global-color-icon'?: string,
  },
}
