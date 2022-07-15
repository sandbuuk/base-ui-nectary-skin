import type { TSinchElementReact } from '../types'

export type TSinchAvatarStatusColor = 'red' | 'yellow' | 'green' | 'grey'

export type TSinchAvatarStatusElement = HTMLElement & {
  color: TSinchAvatarStatusColor,
  setAttribute(name: 'color', value: TSinchAvatarStatusColor): void,
}

export type TSinchAvatarStatusReact = TSinchElementReact<TSinchAvatarStatusElement> & {
  color: TSinchAvatarStatusColor,
}
