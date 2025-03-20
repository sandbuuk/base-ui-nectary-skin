import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

/** Number of coumns from 1 to 10 */
export type TSinchTileControlColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | number

export type TSinchTileControlProps = {
  /** Value */
  value: string,
  /** Multiple */
  multiple?: boolean,
  /** Small */
  small?: boolean,
  /** Number of columns from 1 to 10 */
  cols: TSinchTileControlColumns,
  /** Label that is used for a11y */
  'aria-label': string,
}

export type TSinchTileControlEvents = {
  /** Change value handler */
  '-change'?: (e: CustomEvent<string>) => void,
}

export type TSinchTileControlStyle = {
  // Grid Properties
  '--sinch-grid-num-columns'?: string,
}

export type TSinchTileControl = {
  props: TSinchTileControlProps,
  events: TSinchTileControlEvents,
  style: TSinchTileControlStyle,
}

export type TSinchTileControlElement = NectaryComponentVanillaByType<TSinchTileControl>
export type TSinchTileControlReact = NectaryComponentReactByType<TSinchTileControl>
