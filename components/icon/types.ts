import type { TSinchIcons } from './generated-icon-type'
import type { TSinchElementReact } from '../types'

export { TSinchIcons }

export type TSinchIconElement = HTMLElement & ({
  /** Icon font version */
  'icons-version': '1',
  /** Icon name */
  name: string,
  /** Icon name */
  setAttribute(name: 'name', value: string): void,
} | {
  /** Icon font version */
  'icons-version': '2',
  /** Icon name */
  name: TSinchIcons,
  /** Icon name */
  setAttribute(name: 'name', value: TSinchIcons): void,
})

export type TSinchIconReact = TSinchElementReact<TSinchIconElement> & ({
  /** Icon font version */
  'icons-version': '1',
  /** Icon name */
  name: string,
} | {
  /** Icon font version */
  'icons-version': '2',
  /** Icon name */
  name: TSinchIcons,
}) & {
  style?: {
    '--sinch-global-size-icon'?: string,
    '--sinch-global-color-icon'?: string,
  },
}
