import type { TSinchElementReact } from '../types'

export type TSinchEmojiElement = HTMLElement & {
  /** Emoji character */
  char: string,
  /** Emoji character */
  setAttribute(name: 'char', value: string): void,
}

export type TSinchEmojiReact = TSinchElementReact<TSinchEmojiElement> & {
  /** Emoji character */
  char: string,
}
