import type { TSinchElementReact } from '../types'

export type TSinchAvatarBackground = 'grey' | 'yellow' | 'blue'
export type TSinchAvatarSize = 'l' | 'm' | 's'

export type TSinchAvatarElement = HTMLElement & {
  /** Image source */
  src: string | null,
  /** Alt text */
  alt: string,
  /** Background color */
  background: TSinchAvatarBackground | null,
  /** Size */
  size: TSinchAvatarSize | null,
  /** Image source */
  setAttribute(name: 'src', value: string): void,
  /** Alt text */
  setAttribute(name: 'alt', value: string): void,
  /** Background color */
  setAttribute(name: 'background', value: TSinchAvatarBackground): void,
  /** Size */
  setAttribute(name: 'size', value: TSinchAvatarSize): void,
}

export type TSinchAvatarReact = TSinchElementReact<TSinchAvatarElement> & {
  /** Image source */
  src?: string,
  /** Alt text */
  alt: string,
  /** Background color */
  background?: TSinchAvatarBackground,
  /** Size */
  size?: TSinchAvatarSize,
}
