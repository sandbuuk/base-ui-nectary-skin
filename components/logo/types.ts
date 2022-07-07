import type { TSinchElementReact } from '../types'

export type TSinchLogoElement = HTMLElement & {
  size: number,
  inverted: boolean,
  setAttribute(name: 'size', value: string): void,
  setAttribute(name: 'inverted', value: ''): void,
}

export type TSinchLogoReact = TSinchElementReact<TSinchLogoElement> & {
  size?: number,
  inverted?: boolean,
}
