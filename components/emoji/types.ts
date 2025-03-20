import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

export type TSinchEmojiProps = {
  /** Emoji character */
  char: string,
}

export type TSinchEmojiStyle = {
  // Component Properties
  '--sinch-comp-emoji-vertical-align'?: string,

  // Global Properties
  '--sinch-global-size-icon'?: string,
}

export type TSinchEmoji = {
  props: TSinchEmojiProps,
  style: TSinchEmojiStyle,
}

export type TSinchEmojiElement = NectaryComponentVanillaByType<TSinchEmoji>
export type TSinchEmojiReact = NectaryComponentReactByType<TSinchEmoji>
