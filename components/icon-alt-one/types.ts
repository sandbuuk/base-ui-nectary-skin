import type { IconNames } from './iconNames'
import type { TSinchElementReact } from '../types'

export type TSinchIconElement = HTMLElement & {
  /** Icon name */
  name: IconNames,
  /** Icon name */
  setAttribute(name: 'name', value: IconNames): void,
}

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  /** Icon name */
  name: IconNames,
}
