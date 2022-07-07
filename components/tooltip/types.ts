import type { TRect, TSinchElementReact } from '../types'
import type { orientationValues } from './utils'

export type TSinchTooltipOrientation = typeof orientationValues[number]

export type TSinchTooltipElement = HTMLElement & {
  text: string,
  width: number | null,
  inverted: boolean,
  orientation: TSinchTooltipOrientation,
  readonly tooltipRect: TRect,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'width', value: string): void,
  setAttribute(name: 'inverted', value: ''): void,
  setAttribute(name: 'orientation', value: TSinchTooltipOrientation): void,
}

export type TSinchTooltipReact = TSinchElementReact<TSinchTooltipElement> & {
  text: string,
  width?: number,
  inverted?: boolean,
  orientation?: TSinchTooltipOrientation,
}
