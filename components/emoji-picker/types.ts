import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TEmoji = {
  emoji: string,
  code: string,
  label: string,
  skins?: TEmoji[],
  tone: number | number[],
}

export type TEmojiGroup = {
  name: string,
  emojis: TEmoji[],
}

export type TSinchEmojiPickerProps = {
  readonly skinToneButtonRect?: TRect,
  readonly searchInputRect?: TRect,
  readonly searchClearButtonRect?: TRect,
}

export type TSinchEmojiPickerMethods = {
  nthSkinToneRect(index: number): TRect | null,
  nthTabRect(index: number): TRect | null,
  nthEmojiRect(index: number): TRect | null,
}

export type TSinchEmojiPickerEvents = {
  /** Change value handler */
  '-change': (e: CustomEvent<string>) => void,
}

export type TSinchEmojiPickerStyle = {
  // Fonts
  '--sinch-comp-emoji-picker-font-not-found'?: string,

  // Colors - Default State
  '--sinch-comp-emoji-picker-color-default-text-not-found'?: string,

  // Global Properties
  '--sinch-global-color-text'?: string,
  '--sinch-global-color-icon'?: string,
  '--sinch-global-size-icon'?: string,
  '--sinch-comp-text-font'?: string,
}

export type TSinchEmojiPicker = {
  props: TSinchEmojiPickerProps,
  methods: TSinchEmojiPickerMethods,
  events: TSinchEmojiPickerEvents,
  style: TSinchEmojiPickerStyle,
}

export type TSinchEmojiPickerElement = NectaryComponentVanillaByType<TSinchEmojiPicker>
export type TSinchEmojiPickerReact = NectaryComponentReactByType<TSinchEmojiPicker>

declare global {
  interface NectaryComponentMap {
    'sinch-emoji-picker': TSinchEmojiPicker,
  }

  interface HTMLElementTagNameMap {
    'sinch-emoji-picker': NectaryComponentVanilla<'sinch-emoji-picker'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-emoji-picker': NectaryComponentReact<'sinch-emoji-picker'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-emoji-picker': NectaryComponentReact<'sinch-emoji-picker'>,
    }
  }
}
