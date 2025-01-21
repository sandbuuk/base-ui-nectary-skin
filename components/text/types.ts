import type { TSinchElementReact } from '../types'

export type TSinchTextType = 'm' | 's' | 'xs' | 'xxs'

export type TSinchTextElement = HTMLElement & {
  /** Type */
  type: TSinchTextType,
  /** Block (“paragraph”, default) or inline (“span”) */
  inline: boolean,
  /** Emphasized */
  emphasized: boolean,
  /** Cuts the long text with “…” ellipsis */
  ellipsis: boolean,
  /** Type */
  setAttribute(name: 'type', value: TSinchTextType): void,
  /** Block (“paragraph”, default) or inline (“span”) */
  setAttribute(name: 'inline', value: ''): void,
  /** Emphasized */
  setAttribute(name: 'emphasized', value: ''): void,
  /** Cuts the long text with “…” ellipsis */
  setAttribute(name: 'ellipsis', value: ''): void,
}

export type TSinchTextReact = TSinchElementReact<TSinchTextElement> & {
  /** Type */
  type: TSinchTextType,
  /** Block (“paragraph”, default) or inline (“span”) */
  inline?: boolean,
  /** Emphasized */
  emphasized?: boolean,
  /** Cuts the long text with “…” ellipsis */
  ellipsis?: boolean,
} & {
  style?: {
    // Text Properties
    '--sinch-comp-text-align'?: string,
    '--sinch-comp-text-font'?: string,

    // System Fonts
    '--sinch-sys-font-body-m'?: string,
    '--sinch-sys-font-body-s'?: string,
    '--sinch-sys-font-body-xs'?: string,
    '--sinch-sys-font-body-xxs'?: string,
    '--sinch-sys-font-body-emphasize'?: string,
    '--sinch-sys-font-body-emphasize-s'?: string,

    // Colors
    '--sinch-global-color-text'?: string,
    '--sinch-sys-color-text-default'?: string,

    // Global Properties
    '--sinch-global-text-white-space'?: string,
  },
}
