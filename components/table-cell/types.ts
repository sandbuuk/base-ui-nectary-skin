import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchTableAlignType = 'start' | 'center' | 'end'

export type TSinchTableCellProps = {
  align?: TSinchTableAlignType,
}

export type TSinchTableCellStyle = {
  // Colors - Cell Default
  '--sinch-comp-table-color-cell-default-border-initial'?: string,
}

export type TSinchTableCell = {
  props: TSinchTableCellProps,
  style: TSinchTableCellStyle,
}

export type TSinchTableCellElement = NectaryComponentVanillaByType<TSinchTableCell>
export type TSinchTableCellReact = NectaryComponentReactByType<TSinchTableCell>
