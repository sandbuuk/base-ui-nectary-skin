import type { TSinchElementReact } from '../types'

export type TSinchAvatarStatusColor = 'red' | 'yellow' | 'green' | 'grey'

export type TSinchAvatarStatusElement = HTMLElement & {
  /** Color */
  color: TSinchAvatarStatusColor,
  /** Color */
  setAttribute(name: 'color', value: TSinchAvatarStatusColor): void,
}

export type TSinchAvatarStatusReact = TSinchElementReact<TSinchAvatarStatusElement> & {
  /** Color */
  color: TSinchAvatarStatusColor,
}
