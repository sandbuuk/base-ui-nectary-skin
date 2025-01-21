import type { TSinchElementReact } from '../types'

export type TSinchTitleType = 'xl' | 'l' | 'm' | 's' | 'xs'
export type TSinchTitleLevel = '1' | '2' | '3' | '4' | '5' | '6'

export type TSinchTitleElement = HTMLElement & {
  /** Text */
  text: string,
  /** Type */
  type: TSinchTitleType,
  /** Semantical level */
  level: TSinchTitleLevel,
  /** Cuts the long title with “…” ellipsis */
  ellipsis: boolean,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Type */
  setAttribute(name: 'type', value: TSinchTitleType): void,
  /** Semantical level */
  setAttribute(name: 'level', value: TSinchTitleLevel): void,
  /** Cuts the long title with “…” ellipsis */
  setAttribute(name: 'ellipsis', value: ''): void,
}

export type TSinchTitleReact = TSinchElementReact<TSinchTitleElement> & {
  /** Text */
  text: string,
  /** Type */
  type: TSinchTitleType,
  /** Semantical level */
  level: TSinchTitleLevel,
  /** Cuts the long title with “…” ellipsis */
  ellipsis?: boolean,
} & {
  style?: {
    // Font
    '--sinch-comp-title-font'?: string,
    '--sinch-sys-font-desktop-title-xl'?: string,
    '--sinch-sys-font-desktop-title-l'?: string,
    '--sinch-sys-font-desktop-title-m'?: string,
    '--sinch-sys-font-desktop-title-s'?: string,
    '--sinch-sys-font-desktop-title-xs'?: string,

    // Colors
    '--sinch-global-color-text'?: string,
    '--sinch-sys-color-text-default'?: string,
  },
}
