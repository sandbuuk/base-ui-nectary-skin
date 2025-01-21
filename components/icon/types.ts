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
    // Component Properties
    '--sinch-comp-icon-font-weight'?: string,
    '--sinch-comp-icon-font-family'?: string,
    '--sinch-comp-icon-font-feature-settings'?: string,
    '--sinch-comp-icon-font-family-zero-to-d'?: string,
    '--sinch-comp-icon-font-family-e-to-o'?: string,
    '--sinch-comp-icon-font-family-p-to-z'?: string,

    // Global Properties
    '--sinch-global-size-icon'?: string,
    '--sinch-global-color-icon'?: string,

    // System Colors
    '--sinch-sys-color-text-default'?: string,
  },
}
