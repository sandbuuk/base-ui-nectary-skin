import type { TRect, TSinchElementReact } from '../types'

export type TSinchTooltipOrientation = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
export type TSinchTooltipType = 'slow' | 'fast'

export type TSinchTooltipElement = HTMLElement & {
  /** Text */
  text: string,
  /** Orientation, where it *points to* from origin */
  orientation: TSinchTooltipOrientation,
  /** Type */
  type: TSinchTooltipType,
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
}

export type TSinchTooltipReact = TSinchElementReact<TSinchTooltipElement> & {
  /** Text */
  text: string,
  /** Orientation, where it *points to* from origin */
  orientation?: TSinchTooltipOrientation,
  /** Type */
  type?: TSinchTooltipType,
  /** Show event handler */
  'on-show'?: (e: CustomEvent<void>) => void,
  /** Hide event handler */
  'on-hide'?: (e: CustomEvent<void>) => void,
}
