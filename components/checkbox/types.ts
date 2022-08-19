import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchCheckboxElement = HTMLElement & {
  checked: boolean,
  indeterminate: boolean,
  disabled: boolean,
  invalid: boolean,
  text: string | null,
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'checked', value: ''): void,
  setAttribute(name: 'indeterminate', value: ''): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'invalid', value: ''): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchCheckboxReact = TSinchElementReact<TSinchCheckboxElement> & {
  checked?: boolean,
  indeterminate?: boolean,
  disabled?: boolean,
  invalid?: boolean,
  text?: string,
  'aria-label': string,
  /** @deprecated */
  onChange?: (event: SyntheticEvent<TSinchCheckboxElement, CustomEvent<boolean>>) => void,
  'on-change'?: (e: CustomEvent<boolean>) => void,
  'on-focus'?: (e: CustomEvent<void>) => void,
  'on-blur'?: (e: CustomEvent<void>) => void,
}
