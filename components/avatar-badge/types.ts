import type { TSinchElementReact } from '../types'

export type TSinchAvatarBadgeElement = HTMLElement & {
  text: string,
  setAttribute(name: 'text', value: string): void,
}

export type TSinchAvatarBadgeReact = TSinchElementReact<TSinchAvatarBadgeElement> & {
  text: string,
}
