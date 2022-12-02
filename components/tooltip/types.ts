import type { TRect, TSinchElementReact } from '../types'

export type TSinchTooltipOrientation = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export type TSinchTooltipElement = HTMLElement & {
  /** Text */
  text: string,
  /** @deprecated */
  width: number | null,
  /** Inverted */
  inverted: boolean,
  /** Orientation, where it *points to* from origin */
  orientation: TSinchTooltipOrientation,
  readonly footprintRect: TRect,
  readonly tooltipRect: TRect,
  /** Show event */
  addEventListener(type: '-show', listener: (e: CustomEvent<void>) => void): void,
  /** Hide event */
  addEventListener(type: '-hide', listener: (e: CustomEvent<void>) => void): void,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** @deprecated */
  setAttribute(name: 'width', value: string): void,
  /** Inverted */
  setAttribute(name: 'inverted', value: ''): void,
  /** Orientation, where it *points to* from origin */
  setAttribute(name: 'orientation', value: TSinchTooltipOrientation): void,
}

export type TSinchTooltipReact = TSinchElementReact<TSinchTooltipElement> & {
  /** Text */
  text: string,
  /** @deprecated */
  width?: number,
  /** Inverted */
  inverted?: boolean,
  /** Orientation, where it *points to* from origin */
  orientation?: TSinchTooltipOrientation,
  /** Show event handler */
  'on-show'?: (e: CustomEvent<void>) => void,
  /** Hide event handler */
  'on-hide'?: (e: CustomEvent<void>) => void,
}
