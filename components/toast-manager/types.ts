import type { TRect, TSinchElementReact } from '../types'

export type TSinchToastManagerElement = HTMLElement & {
  readonly containerRect: TRect,
  nthActionRect: (nth: number) => TRect | null,
  nthCloseRect: (nth: number) => TRect | null,
}

export type TSinchToastManagerReact = TSinchElementReact<TSinchToastManagerElement> & {
}
