import type { TSinchAvatarElement, TSinchAvatarReact } from '../avatar/types'
import type { TSinchElementReact } from '../types'

export type TSinchChatAvatarElement = HTMLElement & {
  alt: TSinchAvatarElement['alt'],
  src: TSinchAvatarElement['src'],
  setAttribute(name: 'alt', value: string): void,
  setAttribute(name: 'src', value: string): void,
}

export type TSinchChatAvatarReact = TSinchElementReact<TSinchChatAvatarElement> & {
  alt: TSinchAvatarReact['alt'],
  src?: TSinchAvatarReact['src'],
}
