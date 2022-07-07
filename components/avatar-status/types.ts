import type { TSinchElementReact } from '../types'
import type { colorValues } from './utils'

export type TSinchAvatarStatusColor = typeof colorValues[number]

export type TSinchAvatarStatusElement = HTMLElement & {
  color: TSinchAvatarStatusColor,
  setAttribute(name: 'color', value: TSinchAvatarStatusColor): void,
}

export type TSinchAvatarStatusReact = TSinchElementReact<TSinchAvatarStatusElement> & {
  color: TSinchAvatarStatusColor,
}
