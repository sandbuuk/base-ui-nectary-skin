import type { TRect, TSinchElementReact } from '../types'
import type { TSinchSize } from '../utils/size'

export type TSinchSegmentElement = HTMLElement & {
  caption: string,
  collapsed: boolean,
  size: TSinchSize,
  readonly collapseButtonRect: TRect | null,
  setAttribute(name: 'caption', value: string): void,
  setAttribute(name: 'collapsed', value: ''): void,
  setAttribute(name: 'size', value: TSinchSize): void,
}

export type TSinchSegmentReact = TSinchElementReact<TSinchSegmentElement> & {
  caption: string,
  collapsed?: boolean,
  size?: TSinchSize,
} & {
  style?: {
    // Shape
    '--sinch-comp-segment-shape-radius'?: string,

    // Colors - Default State
    '--sinch-comp-segment-color-default-border-initial'?: string,
    '--sinch-comp-segment-color-default-background-initial'?: string,

    // Fonts
    '--sinch-comp-segment-font-size-m-title'?: string,
    '--sinch-comp-segment-font-size-l-title'?: string,
    '--sinch-comp-segment-font-size-s-title'?: string,

    // Global
    '--sinch-global-size-icon'?: string,
  },
}
