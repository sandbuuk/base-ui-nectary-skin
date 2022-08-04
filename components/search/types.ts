import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchSearchElement = HTMLElement & {
  value: string,
  label: string | null,
  placeholder: string | null,
  maxVisibleItems: number | null,
  selectionStart: HTMLInputElement['selectionStart'],
  selectionEnd: HTMLInputElement['selectionEnd'],
  selectionDirection: HTMLInputElement['selectionDirection'],
  readonly dropdownRect: TRect,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'placeholder', value: string): void,
  setAttribute(name: 'maxvisibleitems', value: string): void,
}

export type TSinchSearchReact = TSinchElementReact<TSinchSearchElement> & {
  value: string,
  label?: string,
  placeholder?: string,
  maxVisibleItems?: number,
  'aria-label': string,
  'clear-aria-label': string,
  onChange: (e: SyntheticEvent<TSinchSearchElement, CustomEvent<string>>) => void,
}
