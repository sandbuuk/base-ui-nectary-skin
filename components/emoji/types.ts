import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

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

declare global {
  interface NectaryComponentMap {
    'sinch-emoji': TSinchEmoji,
  }

  interface HTMLElementTagNameMap {
    'sinch-emoji': NectaryComponentVanilla<'sinch-emoji'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-emoji': NectaryComponentReact<'sinch-emoji'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-emoji': NectaryComponentReact<'sinch-emoji'>,
    }
  }
}
