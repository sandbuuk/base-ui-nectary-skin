import type { TSinchElementReact } from '../types'
import type { statusValues } from './utils'

export type TSinchAccordionStatusType = typeof statusValues[number]

export type TSinchAccordionItemElement = HTMLElement & {
  value: string,
  label: string,
  optionalText: string | null,
  disabled: boolean,
  checked: boolean,
  status: TSinchAccordionStatusType | null,
  focus(): void,
  blur(): void,
}

export type TSinchAccordionItemReact = TSinchElementReact<TSinchAccordionItemElement> & {
  value: string,
  label: string,
  optionalText?: string,
  disabled?: boolean,
  status?: TSinchAccordionStatusType,
}
