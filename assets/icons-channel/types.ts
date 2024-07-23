import type { TSinchElementReact } from '../types'

export type TSinchIconChannelElement = HTMLElement & {
  /** @deprecated */
  size: number,
  /** @deprecated */
  setAttribute(name: 'size', value: string): void,
}

export type TSinchIconChannelReact = TSinchElementReact<TSinchIconChannelElement> & {
  /** @deprecated */
  size?: number,
}
