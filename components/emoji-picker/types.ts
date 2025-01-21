import type { TRect, TSinchElementReact } from '../types'

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

export type TSinchEmojiPickerElement = HTMLElement & {
  readonly skinToneButtonRect: TRect,
  readonly searchInputRect: TRect,
  readonly searchClearButtonRect: TRect,
  nthSkinToneRect(index: number): TRect | null,
  nthTabRect(index: number): TRect | null,
  nthEmojiRect(index: number): TRect | null,
  /** Change value event */
  addEventListener(type: '-change', listener: (e: CustomEvent<string>) => void): void,
}

export type TSinchEmojiPickerReact = TSinchElementReact<TSinchEmojiPickerElement> & {
  /** Change value handler */
  'on-change': (e: CustomEvent<string>) => void,
} & {
  style?: {
    // Fonts
    '--sinch-comp-emoji-picker-font-not-found'?: string,

    // Colors - Default State
    '--sinch-comp-emoji-picker-color-default-text-not-found'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
    '--sinch-global-size-icon'?: string,
    '--sinch-comp-text-font'?: string,
  },
}
