import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchTableRowProps = {
  sticky?: boolean,
  selected?: boolean,
}

export type TSinchTableRowStyle = {
  // Colors - Row Default
  '--sinch-comp-table-color-row-default-background-initial'?: string,
  '--sinch-comp-table-color-row-default-background-hover'?: string,
  '--sinch-comp-table-color-row-default-background-sticky'?: string,

  // Colors - Row Checked
  '--sinch-comp-table-color-row-checked-background-initial'?: string,
}

export type TSinchTableRow = {
  props: TSinchTableRowProps,
  style: TSinchTableRowStyle,
}

export type TSinchTableRowElement = NectaryComponentVanillaByType<TSinchTableRow>
export type TSinchTableRowReact = NectaryComponentReactByType<TSinchTableRow>
