import type { TSinchIcons } from './generated-icon-type'
import type { TSinchElementReact } from '../types'

export { TSinchIcons }

export type TSinchIconElement = HTMLElement & {
  /** Icon name */
  name: TSinchIcons,
  /** Icon name */
  setAttribute(name: 'name', value: string): void,
}

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & {
  /** Icon name */
  name: TSinchIcons,
  style?: {
    '--sinch-global-size-icon'?: string,
    '--sinch-global-color-icon'?: string,
  },
}
