import type { TSinchElementReact } from '../types'

export type TSinchTableRowElement = HTMLElement & {
  sticky: boolean,
  selected: boolean,
  setAttribute(name: 'sticky', value: ''): void,
  setAttribute(name: 'selected', value: ''): void,
}

export type TSinchTableRowReact = TSinchElementReact<TSinchTableRowElement> & {
  sticky?: boolean,
  selected?: boolean,
} & {
  style?: {
    // Colors - Row Default
    '--sinch-comp-table-color-row-default-background-initial'?: string,
    '--sinch-comp-table-color-row-default-background-hover'?: string,
    '--sinch-comp-table-color-row-default-background-sticky'?: string,

    // Colors - Row Checked
    '--sinch-comp-table-color-row-checked-background-initial'?: string,
  },
}
