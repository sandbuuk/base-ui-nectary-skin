import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTimePickerProps = {
  /** Time value in ISO 8601 format */
  value: string,
  /** AM/PM 12-hour clock system, `false` by default */
  ampm?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Submit button label that is used for a11y */
  'submit-aria-label': string,
  readonly submitButtonRect?: TRect,
  readonly amButtonRect?: TRect | null,
  readonly pmButtonRect?: TRect | null,
}

export type TSinchTimePickerMethods = {
  hourDigitRect(hour: number): TRect | null,
  minuteDigitRect(minute: number): TRect | null,
}

export type TSinchTimePickerEvents = {
  /** Change value handler, return time in ISO 8601 format */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchTimePickerStyle = {
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
}

export type TSinchTimePicker = {
  props: TSinchTimePickerProps,
  methods: TSinchTimePickerMethods,
  events: TSinchTimePickerEvents,
  style: TSinchTimePickerStyle,
}

export type TSinchTimePickerElement = NectaryComponentVanillaByType<TSinchTimePicker>
export type TSinchTimePickerReact = NectaryComponentReactByType<TSinchTimePicker>

declare global {
  interface NectaryComponentMap {
    'sinch-time-picker': TSinchTimePicker,
  }

  interface HTMLElementTagNameMap {
    'sinch-time-picker': NectaryComponentVanilla<'sinch-time-picker'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-time-picker': NectaryComponentReact<'sinch-time-picker'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-time-picker': NectaryComponentReact<'sinch-time-picker'>,
    }
  }
}
