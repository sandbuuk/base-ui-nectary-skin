import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

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

declare global {
  interface NectaryComponentMap {
    'sinch-table-cell': TSinchTableCell,
  }

  interface HTMLElementTagNameMap {
    'sinch-table-cell': NectaryComponentVanilla<'sinch-table-cell'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-cell': NectaryComponentReact<'sinch-table-cell'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table-cell': NectaryComponentReact<'sinch-table-cell'>,
    }
  }
}
