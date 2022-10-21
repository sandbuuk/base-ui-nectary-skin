import type { TRect, TSinchElementReact } from '../types'

export type TSinchBadgeSize = 'l' | 'm' | 's'
export type TSinchBadgeMode = 'square' | 'circle'

export type TSinchBadgeElement = HTMLElement & {
  /** Text */
  text: string,
  /** Size */
  size: TSinchBadgeSize,
  /** Mode, `square` by default */
  mode: TSinchBadgeMode,
  /** Color */
  color: string | null,
  /** Hidden */
  hidden: boolean,
  readonly badgeRect: TRect,
  /** Text */
  setAttribute(name: 'text', value: string): void,
  /** Size */
  setAttribute(name: 'size', value: TSinchBadgeSize): void,
  /** Mode, `square` by default */
  setAttribute(name: 'mode', value: TSinchBadgeMode): void,
  /** Color */
  setAttribute(name: 'color', value: string): void,
  /** Hidden */
  setAttribute(name: 'hidden', value: ''): void,
}

export type TSinchBadgeReact = TSinchElementReact<TSinchBadgeElement> & {
  /** Text */
  text: string,
  /** Size */
  size: TSinchBadgeSize,
  /** Mode, `square` by default */
  mode?: TSinchBadgeMode,
  /** Color */
  color?: string,
  /** Hidden */
  hidden?: boolean,
}
