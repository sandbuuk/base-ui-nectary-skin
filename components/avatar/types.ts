import type { TSinchElementReact } from '../types'
import type { backgroundValues, sizeValues } from './utils'

export type TSinchAvatarBackground = typeof backgroundValues[number]
export type TSinchAvatarSize = typeof sizeValues[number]

export type TSinchAvatarElement = HTMLElement & {
  alt: string,
  src: string | null,
  background: TSinchAvatarBackground,
  size: TSinchAvatarSize,
  setAttribute(name: 'alt', value: string): void,
  setAttribute(name: 'src', value: string): void,
  setAttribute(name: 'background', value: TSinchAvatarBackground): void,
  setAttribute(name: 'size', value: TSinchAvatarSize): void,
}

export type TSinchAvatarReact = TSinchElementReact<TSinchAvatarElement> & {
  alt: string,
  src?: string,
  background?: TSinchAvatarBackground,
  size?: TSinchAvatarSize,
}
