import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSelectElement = HTMLElement & {
  value: string,
  label: string,
  placeholder: string | null,
  optionalText: string | null,
  invalidText: string | null,
  additionalText: string | null,
  maxVisibleItems: number | null,
  disabled: boolean,
  readonly dropdownRect: TRect,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'placeholder', value: string): void,
  setAttribute(name: 'optionaltext', value: string): void,
  setAttribute(name: 'additionaltext', value: string): void,
  setAttribute(name: 'maxvisibleitems', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSelectReact = TSinchElementReact<TSinchSelectElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  maxVisibleItems?: number,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchSelectElement, CustomEvent<string>>) => void,
}
