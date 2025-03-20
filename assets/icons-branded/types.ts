import type { TSinchElementReact } from '../types'

export type TSinchIconBrandedElement = HTMLElement & {
  /** @deprecated */
  size: number,
  inverted: boolean,
  /** @deprecated */
  setAttribute(name: 'size', value: string): void,
  setAttribute(name: 'inverted', value: ''): void,
}

export type TSinchIconBrandedProps = {
  /** @deprecated */
  size?: number,
  inverted?: boolean,
}

export type TSinchIconBrandedReact = TSinchElementReact<TSinchIconBrandedElement> & TSinchIconBrandedProps
