import type { TSinchElementReact } from '../types'

export type TSinchTableAlignType = 'start' | 'center' | 'end'

export type TSinchTableCellElement = HTMLElement & {
  align: TSinchTableAlignType,
  setAttribute(name: 'align', value: TSinchTableAlignType): void,
}

export type TSinchTableCellReact = TSinchElementReact<TSinchTableCellElement> & {
  align?: TSinchTableAlignType,
} & {
  style?: {
    // Colors - Cell Default
    '--sinch-comp-table-color-cell-default-border-initial'?: string,
  },
}
