import type { TSinchElementReact } from '../types'

export type TSinchIconElement = HTMLElement & {
  name: string,
}

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  name: string,
}
