import type { TSinchElementReact } from '../types'

export type TSinchIconChannelElement = HTMLElement & {
  size: number,
}

export type TSinchIconChannelReact = TSinchElementReact<TSinchIconChannelElement> & {
  size?: number,
}
