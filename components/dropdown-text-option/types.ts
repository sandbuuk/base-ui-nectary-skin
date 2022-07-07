import type { TSinchElementReact } from '../types'

export type TSinchDropdownTextOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
  readonly icon: Element | null,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'checked', value: ''): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchDropdownTextOptionReact = TSinchElementReact<TSinchDropdownTextOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
