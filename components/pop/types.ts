import type { TRect, TSinchElementReact } from '../types'

export type TSinchPopOrientation =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-stretch'
  | 'top-center'
  | 'top-stretch'
  | 'center-right'
  | 'center-left'

export type TSinchPopElement = HTMLElement & {
  /** Open/close state */
  open: boolean,
  /** Orientation, where it *points to* from origin */
  orientation: TSinchPopOrientation,
  /** Modal/non-modal mode */
  modal: boolean,
  inset: number,
  readonly popoverRect: TRect,
  /** Close event */
  addEventListener(type: '-close', listener: (e: CustomEvent<void>) => void): void,
  /** Open/close state */
  setAttribute(name: 'open', value: ''): void,
  /** Orientation, where it *points to* from origin */
  setAttribute(name: 'orientation', value: TSinchPopOrientation): void,
  /** Modal/non-modal mode */
  setAttribute(name: 'modal', value: boolean): void,
  setAttribute(name: 'inset', value: string): void,
}

export type TSinchPopReact = TSinchElementReact<TSinchPopElement> & {
  /** Open/close state */
  open: boolean,
  /** Orientation, where it *points to* from origin */
  orientation: TSinchPopOrientation,
  /** Modal/non-modal mode */
  modal?: boolean,
  inset?: number,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Close event handler */
  'on-close'?: (e: CustomEvent<void>) => void,
}
