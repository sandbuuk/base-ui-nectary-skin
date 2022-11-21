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
}
