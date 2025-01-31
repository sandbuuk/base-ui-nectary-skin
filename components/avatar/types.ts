import type { TSinchAvatarColor } from './colors'
import type { TSinchElementReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchAvatarStatus = 'online' | 'busy' | 'away' | 'offline'

export type TSinchAvatarElement = HTMLElement & {
  /** Image source */
  src: string | null,
  /** Alt text */
  alt: string,
  /** Background color */
  color: TSinchAvatarColor | null,
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
  color?: TSinchAvatarColor,
  /** Size, `m` by default */
  size?: TSinchSize,
  /** Status */
  status?: TSinchAvatarStatus,
} & {
  style?: {
    // Colors - Container
    '--sinch-comp-avatar-container-color-default-background'?: string,
    '--sinch-comp-avatar-container-color-default-foreground'?: string,

    // Colors - Border
    '--sinch-comp-avatar-border-color-default-initial'?: string,

    // Colors - Status
    '--sinch-comp-avatar-status-color-online-default-background'?: string,
    '--sinch-comp-avatar-status-color-away-default-background'?: string,
    '--sinch-comp-avatar-status-color-busy-default-background'?: string,
    '--sinch-comp-avatar-status-color-offline-default-background'?: string,

    // Shapes
    '--sinch-comp-avatar-shape-radius'?: string,

    // Sizes
    '--sinch-comp-avatar-size-s'?: string,
    '--sinch-comp-avatar-size-m'?: string,
    '--sinch-comp-avatar-size-l'?: string,

    // Fonts
    '--sinch-comp-avatar-container-font-size-s-text'?: string,
    '--sinch-comp-avatar-container-font-size-m-text'?: string,
    '--sinch-comp-avatar-container-font-size-l-text'?: string,

    // Local Properties
    '--sinch-local-size'?: string,
  },
}
