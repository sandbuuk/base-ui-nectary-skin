import type { TRect, TSinchElementReact } from '../types'

export type TSinchSegmentSize = 'l' | 'm' | 's'

export type TSinchSegmentElement = HTMLElement & {
  caption: string,
  collapsed: boolean,
  size: TSinchSegmentSize,
  readonly collapseButtonRect: TRect | null,
  setAttribute(name: 'caption', value: string): void,
  setAttribute(name: 'collapsed', value: ''): void,
  setAttribute(name: 'size', value: TSinchSegmentSize): void,
}

export type TSinchSegmentReact = TSinchElementReact<TSinchSegmentElement> & {
  caption: string,
  collapsed?: boolean,
  size?: TSinchSegmentSize,
}
