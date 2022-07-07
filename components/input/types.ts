import type { TSinchElementReact } from '../types'
import type { inputTypes } from './utils'
import type { SyntheticEvent } from 'react'

export type TTextInputType = typeof inputTypes[number]

export type TSinchInputElement = HTMLElement & {
  type: TTextInputType,
  value: string,
  label: string,
  placeholder: string | null,
  optionalText: string | null,
  invalidText: string | null,
  additionalText: string | null,
  disabled: boolean,
  selectionStart: HTMLInputElement['selectionStart'],
  selectionEnd: HTMLInputElement['selectionEnd'],
  selectionDirection: HTMLInputElement['selectionDirection'],
  focus(): void,
  blur(): void,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'type', value: TTextInputType): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'placeholder', value: string): void,
  setAttribute(name: 'optionaltext', value: string): void,
  setAttribute(name: 'invalidtext', value: string): void,
  setAttribute(name: 'additionaltext', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchInputReact = TSinchElementReact<TSinchInputElement> & {
  type?: TTextInputType,
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchInputElement, CustomEvent<string>>) => void,
}
