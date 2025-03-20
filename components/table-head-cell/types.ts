import type { TSinchTableAlignType } from '../table-cell/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchTableHeaderCellProps = {
  text?: string,
  fit?: boolean,
  align?: TSinchTableAlignType,
}

export type TSinchTableHeaderCellStyle = {
  // Colors - Head Cell Default
  '--sinch-comp-table-color-head-cell-default-border-initial'?: string,
  '--sinch-comp-table-color-head-cell-default-icon-initial'?: string,
  '--sinch-comp-table-color-head-cell-default-text-initial'?: string,

  // Global Properties
  '--sinch-global-color-icon'?: string,
  '--sinch-global-color-text'?: string,
}

export type TSinchTableHeaderCell = {
  props: TSinchTableHeaderCellProps,
  style: TSinchTableHeaderCellStyle,
}

export type TSinchTableHeaderCellElement = NectaryComponentVanillaByType<TSinchTableHeaderCell>
export type TSinchTableHeaderCellReact = NectaryComponentReactByType<TSinchTableHeaderCell>
