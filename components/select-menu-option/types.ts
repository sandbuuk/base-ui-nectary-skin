import type { TSinchElementReact } from '../types'

export type TSinchSelectMenuOptionElement = HTMLElement & {
  value: string,
  text: string,
  disabled: boolean,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchSelectMenuOptionReact = TSinchElementReact<TSinchSelectMenuOptionElement> & {
  value: string,
  text: string,
  disabled?: boolean,
  'aria-label': string,
}
