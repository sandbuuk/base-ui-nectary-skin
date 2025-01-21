import type { TSinchElementReact } from '../types'

export type TSinchFlagElement = HTMLElement & {
  /** Flag country code */
  code: string,
  /** Flag country code */
  setAttribute(code: 'name', value: string): void,
}

export type TSinchFlagReact = TSinchElementReact<TSinchFlagElement> & {
  /** Flag country code */
  code: string,
} & {
  style?: {
    // Global Properties
    '--sinch-global-size-icon'?: string,
  },
}
