import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchTooltipOrientation = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export type TSinchTooltipTextAlign = 'center' | 'right' | 'left'
export type TSinchTooltipType = 'slow' | 'fast'

export type TSinchTooltipProps = {
  /** Text */
  text: string,
  /** Orientation, where it *points to* from origin */
  orientation?: TSinchTooltipOrientation,
  /** Type */
  type?: TSinchTooltipType,
  /** Text Align */
  'text-align'?: TSinchTooltipTextAlign,
  readonly footprintRect?: TRect,
  readonly tooltipRect?: TRect,
}

export type TSinchTooltipEvents = {
  /** Show event handler */
  '-show'?: (e: CustomEvent<void>) => void,
  /** Hide event handler */
  '-hide'?: (e: CustomEvent<void>) => void,
}

export type TSinchTooltipStyle = {
  // Shadow
  '--sinch-comp-tooltip-shadow'?: string,

  // Shape
  '--sinch-comp-tooltip-shape-radius'?: string,

  // Colors
  '--sinch-comp-tooltip-color-background'?: string,
  '--sinch-comp-tooltip-color-text'?: string,

  // Local Color Variables
  '--sinch-local-color-background'?: string,

  // Font
  '--sinch-comp-tooltip-font-body'?: string,

  // Text Alignment
  '--sinch-comp-text-align'?: string,

  // Global Color Text
  '--sinch-global-color-text'?: string,
}

export type TSinchTooltip = {
  props: TSinchTooltipProps,
  events: TSinchTooltipEvents,
  style: TSinchTooltipStyle,
}

export type TSinchTooltipElement = NectaryComponentVanillaByType<TSinchTooltip>
export type TSinchTooltipReact = NectaryComponentReactByType<TSinchTooltip>

declare global {
  interface NectaryComponentMap {
    'sinch-tooltip': TSinchTooltip,
  }

  interface HTMLElementTagNameMap {
    'sinch-tooltip': NectaryComponentVanilla<'sinch-tooltip'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-tooltip': NectaryComponentReact<'sinch-tooltip'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-tooltip': NectaryComponentReact<'sinch-tooltip'>,
    }
  }
}
