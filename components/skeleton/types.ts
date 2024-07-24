import type { TSinchElementReact } from '../types'

export type TSinchSkeletonElement = HTMLElement & {
  /** Card like container */
  setAttribute(name: 'card', value: ''): void,
}

export type TSinchSkeletonReact = TSinchElementReact<TSinchSkeletonElement> & {
  /** Card like container */
  card?: boolean,
}
