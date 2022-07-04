import type { TSinchElementReact } from '../types'
import type { inputTypes } from './utils'
import type { DOMAttributes, FocusEvent, SyntheticEvent } from 'react'

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
}

export type TSinchInputReact = TSinchElementReact<TSinchInputElement> & {
  type?: TTextInputType,
  /** Sets the text inside of an input field */
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  'aria-label': string,
  onChange: (e: SyntheticEvent<TSinchInputElement, CustomEvent<string>>) => void,
  onKeyPress?: DOMAttributes<TSinchInputElement>['onKeyPress'],
  onFocus?: (e: FocusEvent<TSinchInputElement>) => void,
  onBlur?: (e: FocusEvent<TSinchInputElement>) => void,
}
