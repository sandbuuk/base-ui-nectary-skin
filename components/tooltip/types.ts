import type { TRect, TSinchElementReact } from '../types'

export type TSinchTooltipOrientation = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export type TSinchTooltipTextAlign = 'center' | 'right' | 'left'
export type TSinchTooltipType = 'slow' | 'fast'

export type TSinchTooltipElement = HTMLElement & {
  /** Text */
  text: string,
  /** Orientation, where it *points to* from origin */
  orientation: TSinchTooltipOrientation,
  /** Type */
  type: TSinchTooltipType,
  /** Text Align */
  'text-align': TSinchTooltipTextAlign,
  readonly footprintRect: TRect,
  readonly tooltipRect: TRect,
  /** Show event */
  addEventListener(type: '-show', listener: (e: CustomEvent<void>) => void): void,
  /** Hide event */
  addEventListener(type: '-hide', listener: (e: CustomEvent<void>) => void): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Orientation, where it *points to* from origin */
  setAttribute(name: 'orientation', value: TSinchTooltipOrientation): void,
  /** Type */
  setAttribute(name: 'type', value: TSinchTooltipType): void,
  /** Text Align */
  setAttribute(name: 'text-align', value: TSinchTooltipTextAlign): void,
}

export type TSinchTooltipReact = TSinchElementReact<TSinchTooltipElement> & {
  /** Text */
  text: string,
  /** Orientation, where it *points to* from origin */
  orientation?: TSinchTooltipOrientation,
  /** Type */
  type?: TSinchTooltipType,
  /** Text Align */
  'text-align'?: TSinchTooltipTextAlign,
  /** Show event handler */
  'on-show'?: (e: CustomEvent<void>) => void,
  /** Hide event handler */
  'on-hide'?: (e: CustomEvent<void>) => void,
} & {
  style?: {
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
  },
}
