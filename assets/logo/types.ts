import type { TSinchElementReact } from '../types'

export type TSinchLogoElement = HTMLElement & {
  size: number,
  inverted: boolean,
  setAttribute(name: 'size', value: string): void,
  setAttribute(name: 'inverted', value: ''): void,
}

export type TSinchLogoProps = {
  size?: number,
  inverted?: boolean,
}

export type TSinchLogoReact = TSinchElementReact<TSinchLogoElement> & TSinchLogoProps
