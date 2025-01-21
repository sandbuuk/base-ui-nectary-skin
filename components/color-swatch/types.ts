import type { TSinchElementReact } from '../types'

export type TSinchColorSwatchElement = HTMLElement & {
  /** Color name */
  name: string | null,
  /** Color name */
  setAttribute(name: 'name', value: string): void,
}

export type TSinchColorSwatchReact = TSinchElementReact<TSinchColorSwatchElement> & {
  /** Color name */
  name?: string,
} & {
  style?: {
    // Global Properties
    '--sinch-global-size-icon'?: string,

    // Reference Colors
    '--sinch-ref-color-violet-200'?: string,
    '--sinch-ref-color-honey-200'?: string,
    '--sinch-ref-color-grass-200'?: string,
    '--sinch-ref-color-ocean-200'?: string,
  },
}
