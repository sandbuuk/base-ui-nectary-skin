import type { TSinchElementReact } from '../types'

export type TSinchIconElement = HTMLElement & {
  size: number,
}

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  size?: number,
}
