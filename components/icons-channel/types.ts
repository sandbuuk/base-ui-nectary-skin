import type { TSinchElementReact } from '../types'

export type TSinchIconChannelElement = HTMLElement & {
  size: number,
  setAttribute(name: 'size', value: string): void,
}

export type TSinchIconChannelReact = TSinchElementReact<TSinchIconChannelElement> & {
  size?: number,
}
