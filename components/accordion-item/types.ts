import type { TSinchElementReact } from '../types'

export type TSinchAccordionStatusType = 'info' | 'success' | 'warn' | 'error'

export type TSinchAccordionItemElement = HTMLElement & {
  /** Value */
  value: string,
  /** Label */
  label: string,
  /** Optional text on the right side */
  optionalText: string | null,
  /** Status */
  status: TSinchAccordionStatusType | null,
  /** Disabled */
  disabled: boolean,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Optional text on the right side */
  setAttribute(name: 'optionaltext', value: string): void,
  /** Status */
  setAttribute(name: 'status', value: TSinchAccordionStatusType): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchAccordionItemReact = TSinchElementReact<TSinchAccordionItemElement> & {
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
} & {
  style?: {
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
  },
}
