import type { TSinchElementReact } from '../types'

export type TSinchProgressElement = HTMLElement & {
  value: number,
  detailed: boolean,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'detailed', value: ''): void,
}

export type TSinchProgressReact = TSinchElementReact<TSinchProgressElement> & {
  value: number,
  detailed?: boolean,
  'aria-label': string,
} & {
  style?: {
    // Colors - Default State
    '--sinch-comp-progress-color-default-background-initial'?: string,
    '--sinch-comp-progress-color-default-bar-initial'?: string,
    '--sinch-comp-progress-color-default-text-initial'?: string,
  },
}
