import type { TRect, TSinchElementReact } from '../types'
import type { TSinchColorName } from '../utils/colors'

export type TSinchSelectMenuElement = HTMLElement & {
  value: TSinchColorName,
  rows: number | null,
  cols: number | null,
  colors: string | null,
  nthItemRect(index: number): TRect | null,
  addEventListener(type: '-change', listener: (e: CustomEvent<TSinchColorName>) => void): void,
  setAttribute(name: 'colors', value: string): void,
  setAttribute(name: 'value', value: TSinchColorName): void,
  setAttribute(name: 'rows', value: string): void,
  setAttribute(name: 'cols', value: string): void,
}

export type TSinchSelectMenuReact = TSinchElementReact<TSinchSelectMenuElement> & {
  value: TSinchColorName,
  rows?: number,
  cols?: number,
  colors?: string,
  'aria-label': string,
  'on-change'?: (e: CustomEvent<TSinchColorName>) => void,
}
