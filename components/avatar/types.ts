import type { TSinchAvatarColor } from './colors'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'
import type { TSinchSize } from '../utils/size'

export type { TSinchAvatarColor }

export type TSinchAvatarStatus = 'online' | 'busy' | 'away' | 'offline'

export type TSinchAvatarProps = {
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

    // Colors - Status
    '--sinch-comp-avatar-status-color-border'?: string,
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

export type TSinchAvatarStyle = {
  // Colors - Container
  '--sinch-comp-avatar-container-color-default-background'?: string,
  '--sinch-comp-avatar-container-color-default-foreground'?: string,

  // Colors - Border
  '--sinch-comp-avatar-status-color-border'?: string,

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
}

export type TSinchAvatar = {
  props: TSinchAvatarProps,
  style: TSinchAvatarStyle,
}

export type TSinchAvatarElement = NectaryComponentVanillaByType<TSinchAvatar>
export type TSinchAvatarReact = NectaryComponentReactByType<TSinchAvatar>

declare global {
  interface NectaryComponentMap {
    'sinch-avatar': TSinchAvatar,
  }

  interface HTMLElementTagNameMap {
    'sinch-avatar': NectaryComponentVanilla<'sinch-avatar'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-avatar': NectaryComponentReact<'sinch-avatar'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-avatar': NectaryComponentReact<'sinch-avatar'>,
    }
  }
}
