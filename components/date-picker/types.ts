import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect } from '../types'

export type TSinchDatePickerProps = {
  /** Date value in ISO 8601 format */
  value: string,
  /** Date min limit in ISO 8601 format */
  min: string,
  /** Date max limit in ISO 8601 format */
  max: string,
  /** BCP 47 language tag (e.g. en-US), which changes day and month display names in the calendar */
  locale: string,
  /** Date range mode */
  range?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Label that is used for a11y */
  'prev-year-aria-label': string,
  /** Label that is used for a11y */
  'next-year-aria-label': string,
  /** Label that is used for a11y */
  'prev-month-aria-label': string,
  /** Label that is used for a11y */
  'next-month-aria-label': string,
  readonly prevYearButtonRect?: TRect,
  readonly nextYearButtonRect?: TRect,
  readonly prevMonthButtonRect?: TRect,
  readonly nextMonthButtonRect?: TRect,
}

export type TSinchDatePickerMethods = {
  nthButtonRect(index: number): TRect | null,
}

export type TSinchDatePickerEvents = {
  /** Change value handler, return date in ISO 8601 format */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchDatePickerStyle = {
  // Fonts
  '--sinch-comp-date-picker-font-day'?: string,
  '--sinch-comp-date-picker-font-today'?: string,
  '--sinch-comp-date-picker-font-weekday'?: string,
  '--sinch-comp-date-picker-font-header'?: string,

  // Shape
  '--sinch-comp-date-picker-day-shape-radius'?: string,

  // Colors - Header
  '--sinch-comp-date-picker-header-color-default-text-initial'?: string,

  // Colors - Weekday
  '--sinch-comp-date-picker-weekday-color-default-text-initial'?: string,

  // Colors - Default Day State
  '--sinch-comp-date-picker-day-color-default-text-initial'?: string,
  '--sinch-comp-date-picker-day-color-default-background-initial'?: string,
  '--sinch-comp-date-picker-day-color-default-background-hover'?: string,
  '--sinch-comp-date-picker-day-color-default-border-initial'?: string,
  '--sinch-comp-date-picker-day-color-default-outline-focus'?: string,
  '--sinch-comp-date-picker-day-color-default-range-background'?: string,

  // Colors - Disabled Day State
  '--sinch-comp-date-picker-day-color-disabled-text-initial'?: string,

  // Colors - Checked Day State
  '--sinch-comp-date-picker-day-color-checked-text-initial'?: string,
  '--sinch-comp-date-picker-day-color-checked-background-initial'?: string,
  '--sinch-comp-date-picker-day-color-checked-border-initial'?: string,

  // Colors - Today Default State
  '--sinch-comp-date-picker-today-color-default-text-initial'?: string,
  '--sinch-comp-date-picker-today-color-default-background-initial'?: string,
  '--sinch-comp-date-picker-today-color-default-background-hover'?: string,
  '--sinch-comp-date-picker-today-color-default-border-initial'?: string,

  // Colors - Today Disabled State
  '--sinch-comp-date-picker-today-color-disabled-text-initial'?: string,
  '--sinch-comp-date-picker-today-color-disabled-border-initial'?: string,

  // Colors - Today Checked State
  '--sinch-comp-date-picker-today-color-checked-text-initial'?: string,
  '--sinch-comp-date-picker-today-color-checked-background-initial'?: string,
  '--sinch-comp-date-picker-today-color-checked-border-initial'?: string,

  // Global Properties
  '--sinch-com-text-font'?: string,
  '--sinch-global-color-text'?: string,
}

export type TSinchDatePicker = {
  props: TSinchDatePickerProps,
  methods: TSinchDatePickerMethods,
  events: TSinchDatePickerEvents,
  style: TSinchDatePickerStyle,
}

export type TSinchDatePickerElement = NectaryComponentVanillaByType<TSinchDatePicker>
export type TSinchDatePickerReact = NectaryComponentReactByType<TSinchDatePicker>
