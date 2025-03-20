import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchAccordionStatusType = 'info' | 'success' | 'warn' | 'error'

export type TSinchAccordionItemProps = {
  /** Value */
  value: string,
  /** Label */
  label: string,
  /** Optional text on the right side */
  optionalText?: string,
  /** Status */
  status?: TSinchAccordionStatusType,
  /** Disabled */
  disabled?: boolean,
}

export type TSinchAccordionItemStyle = {
  // Component Colors - Default State
  '--sinch-comp-accordion-color-default-border-initial'?: string,
  '--sinch-comp-accordion-color-default-icon-initial'?: string,
  '--sinch-comp-accordion-color-default-title-initial'?: string,
  '--sinch-comp-accordion-color-default-optional-text-initial'?: string,
  '--sinch-comp-accordion-color-default-outline-focus'?: string,

  // Component Colors - Status
  '--sinch-comp-accordion-color-default-status-success'?: string,
  '--sinch-comp-accordion-color-default-status-warning'?: string,
  '--sinch-comp-accordion-color-default-status-error'?: string,
  '--sinch-comp-accordion-color-default-status-info'?: string,

  // Component Colors - Disabled State
  '--sinch-comp-accordion-color-disabled-icon-initial'?: string,
  '--sinch-comp-accordion-color-disabled-title-initial'?: string,
  '--sinch-comp-accordion-color-disabled-optional-text-initial'?: string,

  // Component Fonts
  '--sinch-comp-accordion-font-title'?: string,
  '--sinch-comp-accordion-font-optional-text'?: string,

  // Component Sizes
  '--sinch-comp-accordion-size-icon'?: string,

  // Global Properties
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
  '--sinch-global-color-text'?: string,
  '--sinch-comp-title-font'?: string,
  '--sinch-comp-text-font'?: string,
}

export type TSinchAccordionItem = {
  props: TSinchAccordionItemProps,
  style: TSinchAccordionItemStyle,
}

export type TSinchAccordionItemElement = NectaryComponentVanillaByType<TSinchAccordionItem>
export type TSinchAccordionItemReact = NectaryComponentReactByType<TSinchAccordionItem>
