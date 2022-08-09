import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchPopoverOrientation = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom' | 'top'

export type TSinchPopoverElement = HTMLElement & {
  open: boolean,
  orientation: TSinchPopoverOrientation,
  readonly popoverRect: TRect,
  addEventListener(type: 'close', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'open', value: ''): void,
  setAttribute(name: 'orientation', value: TSinchPopoverOrientation): void,
}

export type TSinchPopoverReact = TSinchElementReact<TSinchPopoverElement> & {
  open: boolean,
  orientation?: TSinchPopoverOrientation,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchPopoverElement, CustomEvent<void>>) => void,
}
