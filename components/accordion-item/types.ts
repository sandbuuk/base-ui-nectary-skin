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
}
