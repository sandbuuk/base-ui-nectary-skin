import type { TSinchElementReact } from '../types'

export type TSinchIconBrandedElement = HTMLElement & {
  size: number,
  inverted: boolean,
  setAttribute(name: 'size', value: string): void,
  setAttribute(name: 'inverted', value: ''): void,
}

export type TSinchIconBrandedReact = TSinchElementReact<TSinchIconBrandedElement> & {
  size?: number,
  inverted?: boolean,
}
