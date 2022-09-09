import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchToggleElement = HTMLElement & {
  checked: boolean,
  small: boolean,
  labeled: boolean,
  disabled: boolean,
  text: string | null,
  addEventListener(type: 'change', listener: (e: CustomEvent<boolean>) => void): void,
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  setAttribute(name: 'checked', value: ''): void,
  setAttribute(name: 'small', value: ''): void,
  setAttribute(name: 'labeled', value: ''): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchToggleReact = TSinchElementReact<TSinchToggleElement> & {
  checked?: boolean,
  small?: boolean,
  labeled?: boolean,
  disabled?: boolean,
  text?: string,
  'aria-label': string,
  /** @deprecated */
  onChange?: (e: SyntheticEvent<TSinchToggleElement, CustomEvent<boolean>>) => void,
  'on-change'?: (e: CustomEvent<boolean>) => void,
}
