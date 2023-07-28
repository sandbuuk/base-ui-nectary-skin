import type { TSinchElementReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchAvatarStatus = 'online' | 'busy' | 'away' | 'offline'

export type TSinchAvatarElement = HTMLElement & {
  /** Image source */
  src: string | null,
  /** Alt text */
  alt: string,
  /** Background color */
  color: string | null,
  /** Status */
  status: TSinchAvatarStatus | null,
  /** Size, `m` by default */
  size: TSinchSize,
  /** Image source */
  setAttribute(name: 'src', value: string): void,
  /** Alt text */
  setAttribute(name: 'alt', value: string): void,
  /** Background color */
  setAttribute(name: 'color', value: string): void,
  /** Size, `m` by default */
  setAttribute(name: 'size', value: TSinchSize): void,
  /** Status */
  setAttribute(name: 'status', value: TSinchAvatarStatus): void,
}

export type TSinchAvatarReact = TSinchElementReact<TSinchAvatarElement> & {
  /** Image source */
  src?: string,
  /** Alt text */
  alt?: string,
  /** Background color */
  color?: string,
  /** Size, `m` by default */
  size?: TSinchSize,
  /** Status */
  status?: TSinchAvatarStatus,
}
