import type { TRect, TSinchElementReact } from '../types'

export type TSinchBadgeSize = 'l' | 'm' | 's'
export type TSinchBadgeMode = 'square' | 'circle'

export type TSinchBadgeElement = HTMLElement & {
  text: string,
  size: TSinchBadgeSize,
  mode: TSinchBadgeMode,
  color: string | null,
  hidden: boolean,
  readonly badgeRect: TRect,
  setAttribute(name: 'text', value: string): void,
  setAttribute(name: 'size', value: TSinchBadgeSize): void,
  setAttribute(name: 'mode', value: TSinchBadgeMode): void,
  setAttribute(name: 'color', value: string): void,
  setAttribute(name: 'hidden', value: ''): void,
}

export type TSinchBadgeReact = TSinchElementReact<TSinchBadgeElement> & {
  text: string,
  size: TSinchBadgeSize,
  mode?: TSinchBadgeMode,
  color?: string,
  hidden?: boolean,
}
