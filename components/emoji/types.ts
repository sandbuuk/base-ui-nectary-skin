import type { TSinchElementReact } from '../types'

export type TSinchEmojiElement = HTMLElement & {
  char: string,
}

export type TSinchEmojiReact = TSinchElementReact<TSinchEmojiElement> & {
  char: string,
}
