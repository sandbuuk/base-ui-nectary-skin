import type { TSinchElementReact } from '../types'
import type { statusValues } from './utils'
import type { FocusEvent } from 'react'

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
  onFocus?: (e: FocusEvent<TSinchAccordionItemElement>) => void,
  onBlur?: (e: FocusEvent<TSinchAccordionItemElement>) => void,
}
