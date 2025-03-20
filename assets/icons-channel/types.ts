import type { TSinchElementReact } from '../types'

export type TSinchIconChannelElement = HTMLElement & {
  size: number,
  setAttribute(name: 'size', value: string): void,
}

export type TSinchIconChannelProps = {
  size?: number,
}

export type TSinchIconChannelReact = TSinchElementReact<TSinchIconChannelElement> & TSinchIconChannelProps
