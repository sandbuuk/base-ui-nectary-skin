import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchBadgeMode = 'square' | 'circle'

export type TSinchBadgeProps = {
  /** Text */
  text: string,
  /** Size */
  size?: TSinchSize,
  /** Mode, `square` by default */
  mode?: TSinchBadgeMode,
  /** Hidden */
  hidden?: boolean,
  /** Badge rect */
  readonly badgeRect?: TRect,
}

export type TSinchBadgeStyle = {
  // Colors
  '--sinch-comp-badge-color-border'?: string,
  '--sinch-comp-badge-color-text'?: string,
  '--sinch-comp-badge-color-background'?: string,

  // Shapes
  '--sinch-comp-badge-shape-radius'?: string,

  // Fonts
  '--sinch-comp-badge-font-size-l'?: string,
  '--sinch-comp-badge-font-size-m'?: string,
}

export type TSinchBadge = {
  props: TSinchBadgeProps,
  style: TSinchBadgeStyle,
}

export type TSinchBadgeElement = NectaryComponentVanillaByType<TSinchBadge>
export type TSinchBadgeReact = NectaryComponentReactByType<TSinchBadge>

declare global {
  interface NectaryComponentMap {
    'sinch-badge': TSinchBadge,
  }

  interface HTMLElementTagNameMap {
    'sinch-badge': NectaryComponentVanilla<'sinch-badge'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-badge': NectaryComponentReact<'sinch-badge'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-badge': NectaryComponentReact<'sinch-badge'>,
    }
  }
}
