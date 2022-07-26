import type { TSinchElementReact } from '../types'

export type TSinchAlertType = 'info' | 'success' | 'warn' | 'error'

export type TSinchAlertElement = HTMLElement & {
  type: TSinchAlertType,
  text: string,
  caption: string,
  multiline: boolean,
  setAttribute(name: 'type', value: TSinchAlertType): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'caption', value: string): void,
  setAttribute(name: 'multiline', value: ''): void,
}

export type TSinchAlertReact = TSinchElementReact<TSinchAlertElement> & {
  type: TSinchAlertType,
  text: string,
  caption?: string,
  multiline?: boolean,
}
