import type { TSinchElementReact } from '../types'

export type TSinchRadioOptionElement = HTMLElement & {
  value: string,
  checked: boolean,
  disabled: boolean,
  text: string,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'checked', value: ''): void,
  setAttribute(name: 'disabled', value: ''): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchRadioOptionReact = TSinchElementReact<TSinchRadioOptionElement> & {
  value: string,
  disabled?: boolean,
  text: string,
  'aria-label': string,
}
