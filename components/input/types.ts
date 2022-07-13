import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchInputType = 'text' | 'password'

export type TSinchInputElement = HTMLElement & {
  /** Text field type, similar to a native HTML input types */
  type: TSinchInputType,
  /** Value */
  value: string,
  /** Label */
  label: string,
  /** Text that appears in the text field when it has no value set */
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
  setAttribute(name: 'type', value: TSinchInputType): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'placeholder', value: string): void,
  setAttribute(name: 'optionaltext', value: string): void,
  setAttribute(name: 'invalidtext', value: string): void,
  setAttribute(name: 'additionaltext', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchInputReact = TSinchElementReact<TSinchInputElement> & {
  /** Controlled value, doesn't change on its own and requres an onChange-value state loop */
  value: string,
  /** Label that shows in UI */
  label: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Text field type, `text` by default */
  type?: TSinchInputType,
  /** Text that appears in the text field when it has no value set */
  placeholder?: string,
  /** Optional text */
  optionalText?: string,
  /** Additional text */
  additionalText?: string,
  /** Invalid text */
  invalidText?: string,
  /** Disabled */
  disabled?: boolean,
  /** Change value handler */
  onChange: (e: SyntheticEvent<TSinchInputElement, CustomEvent<string>>) => void,
}
