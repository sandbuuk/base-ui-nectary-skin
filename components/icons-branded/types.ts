import type { TSinchElementReact } from '../types'

export type TSinchIconBrandedElement = HTMLElement & {
  size: number,
  inverted: boolean,
}

export type TSinchIconBrandedReact = TSinchElementReact<TSinchIconBrandedElement> & {
  size?: number,
  inverted?: boolean,
}
