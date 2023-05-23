import type { TRect, TSinchElementReact } from '../types'

export type TSinchPaginationElement = HTMLElement & {
  value: number,
  max: number,
  readonly prevButtonRect: TRect,
  readonly nextButtonRect: TRect,
  nthButtonRect(index: number): TRect | null,
  addEventListener(type: '-change', listener: (e: CustomEvent<number>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'max', value: string): void,
}

export type TSinchPaginationReact = TSinchElementReact<TSinchPaginationElement> & {
  value: number,
  max: number,
  'on-change': (e: CustomEvent<number>) => void,
}
