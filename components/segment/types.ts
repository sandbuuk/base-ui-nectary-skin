import type { TRect, TSinchElementReact } from '../types'

export type TSinchSegmentElement = HTMLElement & {
  caption: string,
  collapsed: boolean,
  readonly collapseButtonRect: TRect | null,
  setAttribute(name: 'caption', value: string): void,
  setAttribute(name: 'collapsed', value: ''): void,
}

export type TSinchSegmentReact = TSinchElementReact<TSinchSegmentElement> & {
  caption: string,
  collapsed?: boolean,
}
