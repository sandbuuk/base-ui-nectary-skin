import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchPaginationElement = HTMLElement & {
  value: number,
  max: number,
  readonly prevButtonRect: TRect,
  readonly nextButtonRect: TRect,
  nthButtonRect(index: number): TRect | null,
  addEventListener(type: 'change', listener: (e: CustomEvent<number>) => void): void,
  addEventListener(type: '-change', listener: (e: CustomEvent<number>) => void): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'max', value: string): void,
}

export type TSinchPaginationReact = TSinchElementReact<TSinchPaginationElement> & {
  value: number,
  max: number,
  onChange?: (event: SyntheticEvent<TSinchPaginationElement, CustomEvent<number>>) => void,
  'on-change': (e: CustomEvent<number>) => void,
}
