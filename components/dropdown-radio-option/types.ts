import type { TSinchElementReact } from '../types'

export type TSinchDropdownRadioOptionElement = HTMLElement & {
  value: string,
  text: string,
  checked: boolean,
  selected: boolean,
  disabled: boolean,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'checked', value: ''): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchDropdownRadioOptionReact = TSinchElementReact<TSinchDropdownRadioOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
