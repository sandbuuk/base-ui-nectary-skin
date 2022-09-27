import type { TSinchElementReact } from '../types'

export type TSinchActionMenuElement = HTMLElement & {
  rows: number | null,
  setAttribute(name: 'rows', value: string): void,
}

export type TSinchActionMenuReact = TSinchElementReact<TSinchActionMenuElement> & {
  rows?: number,
  'aria-label': string,
}
