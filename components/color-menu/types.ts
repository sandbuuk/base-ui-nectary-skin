import type { TRect, TSinchElementReact } from '../types'
import type { TSinchColorName } from '../utils/colors'

export type TSinchSelectMenuElement = HTMLElement & {
  /** Value */
  value: TSinchColorName,
  /** How many rows to show and scroll the rest */
  rows: number | null,
  /** How many cols to show and scroll the rest */
  cols: number | null,
  /** Comma-separated color names, all colors by default */
  colors: string | null,
  nthItemRect(index: number): TRect | null,
  /** Change event */
  addEventListener(type: '-change', listener: (e: CustomEvent<TSinchColorName>) => void): void,
  /** Comma-separated color names, all colors by default */
  setAttribute(name: 'colors', value: string): void,
  /** Value */
  setAttribute(name: 'value', value: TSinchColorName): void,
  /** How many rows to show and scroll the rest */
  setAttribute(name: 'rows', value: string): void,
  /** How many cols to show and scroll the rest */
  setAttribute(name: 'cols', value: string): void,
}

export type TSinchSelectMenuReact = TSinchElementReact<TSinchSelectMenuElement> & {
  /** Value */
  value: TSinchColorName,
  /** How many rows to show and scroll the rest */
  rows?: number,
  /** How many cols to show and scroll the rest */
  cols?: number,
  /** Comma-separated color names, all colors by default */
  colors?: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Change event handler */
  'on-change'?: (e: CustomEvent<TSinchColorName>) => void,
}
