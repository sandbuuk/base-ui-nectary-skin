import type { TSinchElementReact } from '../types'

export type TSinchListItemElement = HTMLElement

export type TSinchListItemReact = TSinchElementReact<TSinchListItemElement> & {
  style?: {
    // Default State Colors
    '--sinch-comp-list-color-default-background-initial'?: string,
    '--sinch-comp-list-color-default-background-hover'?: string,
    '--sinch-comp-list-color-default-border-initial'?: string,
  },
}
