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
} & {
  style?: {
    // Shape
    '--sinch-comp-pagination-shape-radius'?: string,

    // Font Properties
    '--sinch-comp-pagination-font-default-page-number'?: string,
    '--sinch-comp-pagination-font-checked-page-number'?: string,

    // Default State Colors
    '--sinch-comp-pagination-color-default-icon-default'?: string,
    '--sinch-comp-pagination-color-default-text-initial'?: string,
    '--sinch-comp-pagination-color-default-background-initial'?: string,
    '--sinch-comp-pagination-color-default-background-hover'?: string,
    '--sinch-comp-pagination-color-default-outline-focus'?: string,

    // Checked State Colors
    '--sinch-comp-pagination-color-checked-background-initial'?: string,
    '--sinch-comp-pagination-color-checked-background-hover'?: string,

    // Disabled State Colors
    '--sinch-comp-pagination-color-disabled-icon-initial'?: string,

    // Global Properties
    '--sinch-global-color-icon'?: string,
    '--sinch-icon-size'?: string,
  },
}
