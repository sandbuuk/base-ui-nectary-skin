import type { TSinchElementReact } from '../types'

export type TSinchIconElement = HTMLElement & {
  size: number,
  setAttribute(name: 'size', value: string): void,
}

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  size?: number,
}
