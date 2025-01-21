import type { TSinchElementReact } from '../types'

export type TSinchSkeletonElement = HTMLElement & {
  /** Card like container */
  setAttribute(name: 'card', value: ''): void,
}

export type TSinchSkeletonReact = TSinchElementReact<TSinchSkeletonElement> & {
  /** Card like container */
  card?: boolean,
} & {
  style?: {
    // Surface Colors
    '--sinch-sys-color-surface-primary-default'?: string,
    '--sinch-sys-color-surface-tertiary-default'?: string,

    // Border
    '--sinch-sys-color-border-subtle'?: string,

    // Shape
    '--sinch-sys-shape-radius-l'?: string,
  },
}
