import type { TSinchTextType } from '../text/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type ElementClickedEvent = CustomEvent & {
  currentTarget: HTMLElement,
}

export type TSinchRichTextProps = {
  size?: TSinchTextType,
  text: string,
}

export type TSinchRichTextEvents = {
  /** Click event handler */
  '-element-click'?: (e: ElementClickedEvent) => void,
}

export type TSinchRichTextStyle = {
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
}

export type TSinchRichText = {
  props: TSinchRichTextProps,
  events: TSinchRichTextEvents,
  style: TSinchRichTextStyle,
}

export type TSinchRichTextElement = NectaryComponentVanillaByType<TSinchRichText>
export type TSinchRichTextReact = NectaryComponentReactByType<TSinchRichText>
