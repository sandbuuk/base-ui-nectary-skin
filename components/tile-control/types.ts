import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTileControlElement = HTMLElement & {
  /** Value */
  value: string,
  /** Small */
  small: boolean,
  /** Multiple */
  multiple: boolean,
  /** Number of columns from 1 to 8 */
  cols: number,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  /** Value */
  setAttribute(name: 'value', value: string): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
  /** Multiple */
  setAttribute(name: 'multiple', value: ''): void,
  /** Number of columns from 1 to 8 */
  setAttribute(name: 'cols', value: string): void,
}

export type TSinchTileControlReact = TSinchElementReact<TSinchTileControlElement> & {
  /** Value */
  value: string,
  /** Multiple */
  multiple?: boolean,
  /** Small */
  small?: boolean,
  /** Number of columns from 1 to 8 */
  cols: number,
  /** Label that is used for a11y */
  'aria-label': string,
  /** @deprecated Change value handler */
  onChange?: (event: SyntheticEvent<TSinchTileControlElement, CustomEvent<string>>) => void,
  /** Change value handler */
  'on-change'?: (e: CustomEvent<string>) => void,
}
