import type { TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchTileControlElement = HTMLElement & {
  value: string,
  /** Small */
  small: boolean,
  /** Multiple */
  multiple: boolean,
  /** Num columns */
  cols: number,
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
  setAttribute(name: 'value', value: string): void,
  /** Small */
  setAttribute(name: 'small', value: ''): void,
  /** Multiple */
  setAttribute(name: 'multiple', value: ''): void,
  /** Num columns */
  setAttribute(name: 'cols', value: string): void,
}

export type TSinchTileControlReact = TSinchElementReact<TSinchTileControlElement> & {
  value: string,
  /** Multiple */
  multiple?: boolean,
  /** Small */
  small?: boolean,
  /** Num columns */
  cols: number,
  /** Label that is used for a11y – might be different from `label` */
  'aria-label': string,
  onChange?: (event: SyntheticEvent<TSinchTileControlElement, CustomEvent<string>>) => void,
  'on-change'?: (e: CustomEvent<string>) => void,
}
