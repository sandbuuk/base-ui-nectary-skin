import type { TSinchElementReact } from '../types'

export type TSinchAlertType = 'info' | 'warn' | 'error'

export type TSinchAlertElement = HTMLElement & {
  type: TSinchAlertType,
  text: string,
  setAttribute(name: 'type', value: TSinchAlertType): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchAlertReact = TSinchElementReact<TSinchAlertElement> & {
  type: TSinchAlertType,
  text: string,
}
