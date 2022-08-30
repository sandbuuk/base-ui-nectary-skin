import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTextareaElement = HTMLElement & {
  value: string,
  placeholder: string | null,
  disabled: boolean,
  invalid: boolean,
  selectionStart: HTMLTextAreaElement['selectionStart'],
  selectionEnd: HTMLTextAreaElement['selectionEnd'],
  selectionDirection: HTMLTextAreaElement['selectionDirection'],
  rows: HTMLTextAreaElement['rows'],
  resizable: boolean,
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'invalid', value: ''): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'rows', value: string): void,
  setAttribute(name: 'resizable', value: ''): void,
}

export type TSinchTextareaReact = TSinchElementReact<TSinchTextareaElement> & {
  value: string,
  placeholder?: string,
  disabled?: boolean,
  invalid?: boolean,
  'aria-label': string,
  rows?: number,
  resizable?: boolean,
  onChange?: (e: SyntheticEvent<TSinchTextareaElement, CustomEvent<string>>) => void,
  'on-change'?: (e: CustomEvent<string>) => void,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
