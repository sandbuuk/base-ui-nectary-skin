import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchLinkProps = {
  /** Text content of hyperlink */
  text: string,
  /** URL that hyperlink point to */
  href: string,
  /** Replaces the anchor tag behaviour to use history instead */
  'use-history'?: boolean,
  /** Disabled */
  disabled?: boolean,
  /** Sets `target="_blank" and a special external icon on the left side */
  external?: boolean,
  /** Special standalone (`display: block`) mode with an arrow icon on the right side */
  standalone?: boolean,
  /** Prevents default behaviour on hyperlink click */
  preventDefault?: boolean,
  /** Label that is used for a11y – might be different from `text` */
  'aria-label': string,
}

export type TSinchLinkEvents = {
  /** Click even handler */
  '-click'?: (e: CustomEvent<void>) => void,
  /** Focus even handler */
  '-focus'?: (e: CustomEvent<void>) => void,
  /** Blur even handler */
  '-blur'?: (e: CustomEvent<void>) => void,
}

export type TSinchLinkStyle = {
  // Default State - Font & Text Decoration
  '--sinch-comp-link-default-font-initial'?: string,
  '--sinch-comp-link-default-text-decoration-initial'?: string,
  '--sinch-comp-link-default-text-decoration-hover'?: string,
  '--sinch-comp-link-default-text-decoration-disabled'?: string,

  // Standalone State - Font
  '--sinch-comp-link-standalone-font-initial'?: string,

  // Default State - Colors
  '--sinch-comp-link-color-default-text-initial'?: string,
  '--sinch-comp-link-color-default-text-hover'?: string,
  '--sinch-comp-link-color-default-icon-initial'?: string,
  '--sinch-comp-link-color-default-icon-hover'?: string,
  '--sinch-comp-link-color-default-outline-focus'?: string,

  // Disabled State - Colors
  '--sinch-comp-link-color-disabled-text-initial'?: string,
  '--sinch-comp-link-color-disabled-icon-initial'?: string,

  // Global Properties
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
  '--sinch-global-text-white-space'?: string,
}

export type TSinchLink = {
  props: TSinchLinkProps,
  events: TSinchLinkEvents,
  style: TSinchLinkStyle,
}

export type TSinchLinkElement = NectaryComponentVanillaByType<TSinchLink>
export type TSinchLinkReact = NectaryComponentReactByType<TSinchLink>
