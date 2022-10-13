import type { TSinchElementReact } from '../types'

export type TSinchColorSwatchElement = HTMLElement & {
  /** Color name */
  name: string,
  /** Color name */
  setAttribute(name: 'name', value: string): void,
}

export type TSinchColorSwatchReact = TSinchElementReact<TSinchColorSwatchElement> & {
  /** Color name */
  name: string,
}
