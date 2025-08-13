import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchPaginationProps = {
  value: number,
  max: number,
  readonly prevButtonRect?: TRect,
  readonly nextButtonRect?: TRect,
}

export type TSinchPaginationMethods = {
  nthButtonRect(index: number): TRect | null,
}

export type TSinchPaginationEvents = {
  '-change': (e: CustomEvent<number>) => void,
}

export type TSinchPaginationStyle = {
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
}

export type TSinchPagination = {
  props: TSinchPaginationProps,
  methods: TSinchPaginationMethods,
  events: TSinchPaginationEvents,
  style: TSinchPaginationStyle,
}

export type TSinchPaginationElement = NectaryComponentVanillaByType<TSinchPagination>
export type TSinchPaginationReact = NectaryComponentReactByType<TSinchPagination>

declare global {
  interface NectaryComponentMap {
    'sinch-pagination': TSinchPagination,
  }

  interface HTMLElementTagNameMap {
    'sinch-pagination': NectaryComponentVanilla<'sinch-pagination'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-pagination': NectaryComponentReact<'sinch-pagination'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-pagination': NectaryComponentReact<'sinch-pagination'>,
    }
  }
}
