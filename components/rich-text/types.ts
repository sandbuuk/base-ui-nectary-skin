import type { TSinchTextType } from '../text/types'
import type { TSinchElementReact } from '../types'

export type TSinchRichTextElement = HTMLElement & {
  size: TSinchTextType,
  text: string,
  setAttribute(name: 'size', value: TSinchTextType): void,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchRichTextReact = TSinchElementReact<TSinchRichTextElement> & {
  size?: TSinchTextType,
  text: string,
} & {
  style?: {
    // Fonts
    '--sinch-comp-rich-text-font'?: string,
    '--sinch-sys-font-body-m'?: string,
    '--sinch-sys-font-body-s'?: string,
    '--sinch-sys-font-body-xs'?: string,
    '--sinch-sys-font-body-xxs'?: string,
    '--sinch-ref-typography-font-weight-700'?: string,
    '--sinch-comp-link-default-font-initial'?: string,
    '--sinch-comp-code-tag-font-text'?: string,

    // Colors
    '--sinch-sys-color-text-default'?: string,
    '--sinch-comp-link-color-default-text-initial'?: string,
    '--sinch-comp-link-color-default-text-hover'?: string,
    '--sinch-comp-code-tag-color-default-border-initial'?: string,
    '--sinch-comp-code-tag-color-default-background-initial'?: string,

    // Shape
    '--sinch-comp-code-tag-shape-radius'?: string,

    // Other
    '--sinch-comp-emoji-vertical-align'?: string,
    '--sinch-global-color-text'?: string,
    '--sinch-global-size-icon'?: string,
  },
}
