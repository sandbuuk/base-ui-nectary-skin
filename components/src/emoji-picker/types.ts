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
}
