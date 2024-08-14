import type { TSinchElementReact } from '../types'

export type TSinchIconElement = HTMLElement & { }

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  style?: {
    '--sinch-global-size-icon': string,
    '--sinch-global-color-icon': string,
  },
}
