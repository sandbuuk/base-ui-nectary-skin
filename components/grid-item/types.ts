import type { TSinchElementReact } from '../types'

export type TSinchGridItemElement = HTMLElement & {
  xl: number | null,
  l: number | null,
  m: number | null,
  s: number | null,
  setAttribute(name: 'xl', value: string): void,
  setAttribute(name: 'l', value: string): void,
  setAttribute(name: 'm', value: string): void,
  setAttribute(name: 's', value: string): void,
}

export type TSinchGridItemReact = TSinchElementReact<TSinchGridItemElement> & {
  xl?: number,
  l?: number,
  m?: number,
  s?: number,
}
