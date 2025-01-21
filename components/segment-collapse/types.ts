import type { TSinchElementReact } from '../types'

export type TSinchSegmentExpandElement = HTMLElement & {
  value: boolean,
  addEventListener(type: '-change', listener: (e: CustomEvent<boolean>) => void): void,
  setAttribute(name: 'value', value: string): void,
}

export type TSinchSegmentExpandReact = TSinchElementReact<TSinchSegmentExpandElement> & {
  value: boolean,
  'aria-label': string,
  'on-change'?: (e: CustomEvent<boolean>) => void,
} & {
  style?: {
    // Global
    '--sinch-global-size-icon'?: string,
  },
}
