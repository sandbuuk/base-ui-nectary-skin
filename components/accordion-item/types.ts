import type { TSinchElementReact } from '../types'

export type TSinchAccordionStatusType = 'info' | 'success' | 'warn' | 'error'

export type TSinchAccordionItemElement = HTMLElement & {
  value: string,
  label: string,
  optionalText: string | null,
  disabled: boolean,
  status: TSinchAccordionStatusType | null,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'optionaltext', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'status', value: TSinchAccordionStatusType): void,
}

export type TSinchAccordionItemReact = TSinchElementReact<TSinchAccordionItemElement> & {
  value: string,
  label: string,
  optionalText?: string,
  disabled?: boolean,
  status?: TSinchAccordionStatusType,
}
