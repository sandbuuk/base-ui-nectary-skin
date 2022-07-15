import type { TSinchElementReact } from '../types'

export type TSinchAvatarBackground = 'grey' | 'yellow' | 'blue'
export type TSinchAvatarSize = 'l' | 'm' | 's'

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
