import type { TSinchElementReact } from '../types'

export type TSinchActionMenuElement = HTMLElement & {
  /** How many rows to show and scroll the rest */
  rows: number | null,
  /** How many rows to show and scroll the rest */
  setAttribute(name: 'rows', value: string): void,
}

export type TSinchActionMenuReact = TSinchElementReact<TSinchActionMenuElement> & {
  /** How many rows to show and scroll the rest */
  rows?: number,
  /** Label that is used for a11y */
  'aria-label': string,
}
