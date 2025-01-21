import type { TSinchElementReact } from '../types'

export type TSinchLinkElement = HTMLElement & {
  /** Text content of hyperlink */
  text: string,
  /** URL that hyperlink point to */
  href: string,
  /** Disabled */
  disabled: boolean,
  /** Replaces the anchor tag behaviour to use history instead */
  'use-history': boolean,
  /** Sets `target="_blank" and a special external icon on the left side */
  external: boolean,
  /** Special standalone (`display: block`) mode with an arrow icon on the right side */
  standalone: boolean,
  /** Prevents default behaviour on hyperlink click */
  preventDefault: boolean,
  /** Click event */
  addEventListener(type: '-click', listener: (e: CustomEvent<void>) => void): void,
  /** Focus event */
  addEventListener(type: '-focus', listener: (e: CustomEvent<void>) => void): void,
  /** Blur event */
  addEventListener(type: '-blur', listener: (e: CustomEvent<void>) => void): void,
  /** Text content of hyperlink */
  setAttribute(name: 'text', value: string): void,
  /** URL that hyperlink point to */
  setAttribute(name: 'href', value: string): void,
  /** Disabled */
  setAttribute(name: 'disabled', value: ''): void,
  /** Sets `target="_blank" and a special external icon on the left side */
  setAttribute(name: 'external', value: ''): void,
  /** Special standalone (`display: block`) mode with an arrow icon on the right side */
  setAttribute(name: 'standalone', value: ''): void,
  /** Prevents default behaviour on hyperlink click */
  setAttribute(name: 'preventdefault', value: ''): void,
}

export type TSinchLinkReact = TSinchElementReact<TSinchLinkElement> & {
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
  /** Click even handler */
  'on-click'?: (e: CustomEvent<void>) => void,
  /** Focus even handler */
  'on-focus'?: (e: CustomEvent<void>) => void,
  /** Blur even handler */
  'on-blur'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
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
  },
}
