import type { TSinchElementReact } from '../types'

export type TSinchLogoElement = HTMLElement & {
  size: number,
  inverted: boolean,
}

export type TSinchLogoReact = TSinchElementReact<TSinchLogoElement> & {
  size?: number,
  inverted?: boolean,
}
