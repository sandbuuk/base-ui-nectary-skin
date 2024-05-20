import type { TRect, TSinchElementReact } from '../types'

export type TSinchToastManagerOrigin = 'top-right' | 'bottom-right'

export type TSinchToastManagerElement = HTMLElement & {
  readonly containerRect: TRect,
  nthActionRect: (nth: number) => TRect | null,
  nthCloseRect: (nth: number) => TRect | null,
  origin: TSinchToastManagerOrigin,
  /** Origin */
  setAttribute(name: 'origin', value: TSinchToastManagerOrigin): void,
}

export type TSinchToastManagerReact = TSinchElementReact<TSinchToastManagerElement> & {
  origin?: TSinchToastManagerOrigin,
}
