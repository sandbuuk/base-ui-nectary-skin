import type { TSinchElementReact } from '../types'

export type TSinchIconElement = HTMLElement & {
  /** Icon name */
  name: string,
  /** Icon name */
  setAttribute(name: 'name', value: string): void,
}

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  /** Icon name */
  name: string,
}
