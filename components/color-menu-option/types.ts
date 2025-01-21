import type { TSinchElementReact } from '../types'

export type TSinchColorMenuOptionElement = HTMLElement & {
  /** Value */
  value: string,
  /** Value */
  setAttribute(name: 'value', value: string): void,
}

export type TSinchColorMenuOptionReact = TSinchElementReact<TSinchColorMenuOptionElement> & {
  /** Value */
  value: string,
} & {
  style?: {
    // Colors - Default State
    '--sinch-comp-color-menu-option-color-default-border-initial'?: string,
    '--sinch-comp-color-menu-option-color-default-border-selected'?: string,
    '--sinch-comp-color-menu-option-color-default-border-focus'?: string,
    '--sinch-comp-color-menu-option-color-default-border-hover'?: string,
    '--sinch-comp-color-menu-option-color-default-border-active'?: string,
  },
}
