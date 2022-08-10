import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchPopoverOrientation = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom' | 'top'

export type TSinchPopoverElement = HTMLElement & {
  /** Open/close state */
  open: boolean,
  /** Orientation, where it *points to* from origin */
  orientation: TSinchPopoverOrientation,
  /** Modal/non-modal mode */
  modal: boolean,
  readonly popoverRect: TRect,
  /** Close event */
  addEventListener(type: 'close', listener: (e: CustomEvent<void>) => void): void,
  /** Open/close state */
  setAttribute(name: 'open', value: ''): void,
  /** Orientation, where it *points to* from origin */
  setAttribute(name: 'orientation', value: TSinchPopoverOrientation): void,
  /** Modal/non-modal mode */
  setAttribute(name: 'modal', value: boolean): void,
}

export type TSinchPopoverReact = TSinchElementReact<TSinchPopoverElement> & {
  /** Open/close state */
  open: boolean,
  /** Orientation, where it *points to* from origin */
  orientation?: TSinchPopoverOrientation,
  /** Modal/non-modal mode */
  modal?: boolean,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Close event handler */
  onClose?: (event: SyntheticEvent<TSinchPopoverElement, CustomEvent<void>>) => void,
}
