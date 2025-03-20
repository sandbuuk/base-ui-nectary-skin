import type { NectaryComponentReactByType } from '../types'

export type TSinchListItemStyle = {
  // Default State Colors
  '--sinch-comp-list-color-default-background-initial'?: string,
  '--sinch-comp-list-color-default-background-hover'?: string,
  '--sinch-comp-list-color-default-border-initial'?: string,
}

export type TSinchListItem = {
  style: TSinchListItemStyle,
}

export type TSinchListItemElement = HTMLElement
export type TSinchListItemReact = NectaryComponentReactByType<TSinchListItemElement>
