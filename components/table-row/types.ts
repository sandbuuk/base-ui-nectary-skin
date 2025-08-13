import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

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

declare global {
  interface NectaryComponentMap {
    'sinch-table-row': TSinchTableRow,
  }

  interface HTMLElementTagNameMap {
    'sinch-table-row': NectaryComponentVanilla<'sinch-table-row'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-table-row': NectaryComponentReact<'sinch-table-row'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-table-row': NectaryComponentReact<'sinch-table-row'>,
    }
  }
}
