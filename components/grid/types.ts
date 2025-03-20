import type { NectaryComponentReactByType } from '../types'

export type TSinchGridStyle = {
  // Grid Properties - XL
  '--sinch-comp-grid-columns-xl'?: string,
  '--sinch-comp-grid-gutter-xl'?: string,
  '--sinch-comp-grid-margin-xl'?: string,
  // Grid Properties - L
  '--sinch-comp-grid-columns-l'?: string,
  '--sinch-comp-grid-gutter-l'?: string,
  '--sinch-comp-grid-margin-l'?: string,
  // Grid Properties - M
  '--sinch-comp-grid-columns-m'?: string,
  '--sinch-comp-grid-gutter-m'?: string,
  '--sinch-comp-grid-margin-m'?: string,
  // Grid Properties - S
  '--sinch-comp-grid-columns-s'?: string,
  '--sinch-comp-grid-gutter-s'?: string,
  '--sinch-comp-grid-margin-s'?: string,
}

export type TSinchGrid = {
  style: TSinchGridStyle,
}

export type TSinchGridElement = HTMLElement
export type TSinchGridReact = NectaryComponentReactByType<TSinchGridElement>
