import type { TSinchElementReact } from '../types'

/** Number of coumns from 1 to 10 */
export type TSinchTileControlColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | number

export type TSinchTileControlElement = HTMLElement & {
  /** Value */
  value: string,
  /** Small */
  small: boolean,
  /** Multiple */
  multiple: boolean,
  /** Number of columns from 1 to 10 */
  cols: TSinchTileControlColumns,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
  /** Multiple */
  setAttribute(name: 'multiple', value: ''): void,
  /** Number of columns from 1 to 10 */
  setAttribute(name: 'cols', value: string): void,
}

export type TSinchTileControlReact = TSinchElementReact<TSinchTileControlElement> & {
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
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
}
