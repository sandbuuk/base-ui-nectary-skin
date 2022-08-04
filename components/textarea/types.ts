import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTextareaElement = HTMLElement & {
  value: string,
  label: string,
  placeholder: string | null,
  optionalText: string | null,
  invalidText: string | null,
  additionalText: string | null,
  disabled: boolean,
  selectionStart: HTMLTextAreaElement['selectionStart'],
  selectionEnd: HTMLTextAreaElement['selectionEnd'],
  selectionDirection: HTMLTextAreaElement['selectionDirection'],
  rows: HTMLTextAreaElement['rows'],
  resizable: boolean,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'placeholder', value: string): void,
  setAttribute(name: 'optionaltext', value: string): void,
  setAttribute(name: 'invalidtext', value: string): void,
  setAttribute(name: 'additionaltext', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'rows', value: string): void,
  setAttribute(name: 'resizable', value: ''): void,
}

export type TSinchTextareaReact = TSinchElementReact<TSinchTextareaElement> & {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  'aria-label': string,
  rows?: number,
  resizable?: boolean,
  onChange: (e: SyntheticEvent<TSinchTextareaElement, CustomEvent<string>>) => void,
}
