import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchInputType = 'text' | 'password'

export type TSinchInputElement = HTMLElement & {
  /** Text field type, `text` by default */
  type: TSinchInputType,
  /** Value */
  value: string,
  /** Label */
  label: string,
  /** Text that appears in the text field when it has no value set */
  placeholder: string | null,
  /** Optional text */
  optionalText: string | null,
  /** Additional text */
  additionalText: string | null,
  /** Invalid text, controls the overall invalid state of the text field */
  invalidText: string | null,
  /** Disabled */
  disabled: boolean,
  selectionStart: HTMLInputElement['selectionStart'],
  selectionEnd: HTMLInputElement['selectionEnd'],
  selectionDirection: HTMLInputElement['selectionDirection'],
  focus(): void,
  blur(): void,
  /** Change value event */
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  /** Text field type, `text` by default */
  setAttribute(name: 'type', value: TSinchInputType): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Label */
  setAttribute(name: 'label', value: string): void,
  /** Text that appears in the text field when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** Optional text */
  setAttribute(name: 'optionaltext', value: string): void,
  /** Additional text */
  setAttribute(name: 'additionaltext', value: string): void,
  /** Invalid text, controls the overall invalid state of the text field */
  setAttribute(name: 'invalidtext', value: string): void,
  /** Disabled */
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
  /** Invalid text, controls the overall invalid state of the text field */
  invalidText?: string,
  /** Disabled */
  disabled?: boolean,
  /** Change value handler */
  onChange: (e: SyntheticEvent<TSinchInputElement, CustomEvent<string>>) => void,
}
