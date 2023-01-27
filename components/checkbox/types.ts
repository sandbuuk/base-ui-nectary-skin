import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchCheckboxElement = HTMLElement & {
  /** Value */
  checked: boolean,
  /** Indeterminate */
  indeterminate: boolean,
  /** Disabled */
  disabled: boolean,
  /** Invalid */
  invalid: boolean,
  /** Text */
  text: string | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Checked */
  setAttribute(name: 'checked', value: ''): void,
  /** Indeterminate */
  setAttribute(name: 'indeterminate', value: ''): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Invalid */
  setAttribute(name: 'invalid', value: ''): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
}

export type TSinchCheckboxReact = TSinchElementReact<TSinchCheckboxElement> & {
  /** Checked */
  checked?: boolean,
  /** Indeterminate */
  indeterminate?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** Invalid */
  invalid?: boolean,
  /** Text */
  text?: string,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  /** @deprecated */
  onChange?: (event: SyntheticEvent<TSinchCheckboxElement, CustomEvent<boolean>>) => void,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<boolean>) => void,
  /** Focus handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
}
