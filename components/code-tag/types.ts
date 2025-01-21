import type { TSinchElementReact } from '../types'

export type TSinchCodeTagElement = HTMLElement & {
  /** Text content of hyperlink */
  text: string,
  /** Text content of hyperlink */
  setAttribute(name: 'text', value: string): void,
}

export type TSinchCodeTagReact = TSinchElementReact<TSinchCodeTagElement> & {
  /** Text content of hyperlink */
  text: string,
} & {
  style?: {
    // Colors - Default State
    '--sinch-comp-code-tag-color-default-text-initial'?: string,
    '--sinch-comp-code-tag-color-default-border-initial'?: string,
    '--sinch-comp-code-tag-color-default-background-initial'?: string,

    // Fonts
    '--sinch-comp-code-tag-font-text'?: string,

    // Shapes
    '--sinch-comp-code-tag-shape-radius'?: string,

    // Global Properties
    '--sinch-global-text-white-space'?: string,
  },
}
