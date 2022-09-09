import type { TSinchElementReact } from '../types'

export type TSinchInlineAlertType = 'info' | 'success' | 'warn' | 'error'

export type TSinchInlineAlertElement = HTMLElement & {
  type: TSinchInlineAlertType,
  text: string | null,
  caption: string,
  setAttribute(name: 'type', value: TSinchInlineAlertType): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'caption', value: string): void,
}

export type TSinchInlineAlertReact = TSinchElementReact<TSinchInlineAlertElement> & {
  type: TSinchInlineAlertType,
  text?: string,
  caption: string,
}
