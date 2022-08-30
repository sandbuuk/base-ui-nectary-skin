import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchInputType = 'text' | 'password'

export type TSinchInputElement = HTMLElement & {
  /** Text field type, `text` by default */
  type: TSinchInputType,
  /** Value */
  value: string,
  /** Text that appears in the text field when it has no value set */
  placeholder: string | null,
  /** Invalid state */
  invalid: boolean,
  /** Disabled */
  disabled: boolean,
  selectionStart: number | null,
  selectionEnd: number | null,
  selectionDirection: 'forward' | 'backward' | 'none' | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Text field type, `text` by default */
  setAttribute(name: 'type', value: TSinchInputType): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Text that appears in the text field when it has no value set */
  setAttribute(name: 'placeholder', value: string): void,
  /** Invalid state */
  setAttribute(name: 'invalid', value: ''): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchInputReact = TSinchElementReact<TSinchInputElement> & {
  /** Controlled value, doesn't change on its own and requres an onChange-value state loop */
  value: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** Text field type, `text` by default */
  type?: TSinchInputType,
  /** Text that appears in the text field when it has no value set */
  placeholder?: string,
  /** Invalid state */
  invalid?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** @deprecated Change value handler */
  onChange?: (e: SyntheticEvent<TSinchInputElement, CustomEvent<string>>) => void,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
