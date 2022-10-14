import type { TSinchElementReact } from '../types'

export type TSinchAvatarBadgeElement = HTMLElement & {
  /** Text */
  text: string,
  /** Text */
  setAttribute(name: 'text', value: string): void,
}

export type TSinchAvatarBadgeReact = TSinchElementReact<TSinchAvatarBadgeElement> & {
  /** Text */
  text: string,
}
