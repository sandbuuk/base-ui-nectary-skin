import type { TSinchElementReact } from '../types'

export type TSinchGridItemElement = HTMLElement & {
  xl: number | null,
  l: number | null,
  m: number | null,
  s: number | null,
}

export type TSinchGridItemReact = TSinchElementReact<TSinchGridItemElement> & {
  xl?: number,
  l?: number,
  m?: number,
  s?: number,
}
