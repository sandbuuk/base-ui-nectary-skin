import type { TSinchTableAlignType } from '../table-cell/types'
import type { TSinchElementReact } from '../types'

export type TSinchTableHeaderCellElement = HTMLElement & {
  text: string | null,
  align: TSinchTableAlignType,
  fit: boolean,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'align', value: TSinchTableAlignType): void,
  setAttribute(name: 'fit', value: ''): void,
}

export type TSinchTableHeaderCellReact = TSinchElementReact<TSinchTableHeaderCellElement> & {
  text?: string,
  fit?: boolean,
  align?: TSinchTableAlignType,
} & {
  style?: {
    // Colors - Head Cell Default
    '--sinch-comp-table-color-head-cell-default-border-initial'?: string,
    '--sinch-comp-table-color-head-cell-default-icon-initial'?: string,
    '--sinch-comp-table-color-head-cell-default-text-initial'?: string,

    // Global Properties
    '--sinch-global-color-icon'?: string,
    '--sinch-global-color-text'?: string,
  },
}
