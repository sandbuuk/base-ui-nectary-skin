import type { TSinchElementReact } from '../types'

export type TSinchCardElement = HTMLElement & {
  text: string,
  label: string,
  caption: string,
  disabled: boolean,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'label', value: string): void,
  setAttribute(name: 'caption', value: string): void,
  setAttribute(name: 'disabled', value: ''): void,
}

export type TSinchCardReact = TSinchElementReact<TSinchCardElement> & {
  text: string,
  label?: string,
  caption: string,
  disabled?: boolean,
}
