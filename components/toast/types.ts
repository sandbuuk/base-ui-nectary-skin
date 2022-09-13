import type { TSinchElementReact } from '../types'

export type TSinchToastType = 'info' | 'success' | 'warn' | 'error'

export type TSinchToastElement = HTMLElement & {
  type: TSinchToastType,
  text: string | null,
  persistent: boolean,
  setAttribute(name: 'type', value: TSinchToastType): void,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'persistent', value: ''): void,
}

export type TSinchToastReact = TSinchElementReact<TSinchToastElement> & {
  type: TSinchToastType,
  text?: string,
  persistent?: boolean,
}
