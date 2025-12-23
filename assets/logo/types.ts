import type { TSinchElementReact } from '../types'

export type TSinchLogoElement = HTMLElement & {
  size: number,
  inverted: boolean,
  alt?: string,
  setAttribute(name: 'size', value: string): void,
  setAttribute(name: 'inverted', value: ''): void,
  setAttribute(name: 'alt', value: string): void,
}

export type TSinchLogoProps = {
  size?: number,
  inverted?: boolean,
  alt?: string,
}

export type TSinchLogoReact = TSinchElementReact<TSinchLogoElement> & TSinchLogoProps
