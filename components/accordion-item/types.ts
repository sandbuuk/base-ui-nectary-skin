import type { TSinchElementReact } from '../types'
import type { statusValues } from './utils'

export type TSinchAccordionStatusType = typeof statusValues[number]

export type TSinchAccordionItemElement = HTMLElement & {
  value: string,
  label: string,
  optionalText: string | null,
  disabled: boolean,
  status: TSinchAccordionStatusType | null,
  focus(): void,
  blur(): void,
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
