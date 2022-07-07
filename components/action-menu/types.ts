import type { TSinchPopoverOrientation } from '../popover/types'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchActionMenuElement = HTMLElement & {
  open: boolean,
  orientation: TSinchPopoverOrientation,
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  addEventListener(type: 'close', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'open', value: ''): void,
  setAttribute(name: 'orientation', value: TSinchPopoverOrientation): void,
  setAttribute(name: 'maxvisibleitems', value: string): void,
}

export type TSinchActionMenuReact = TSinchElementReact<TSinchActionMenuElement> & {
  open: boolean,
  orientation?: TSinchPopoverOrientation,
  maxVisibleItems?: number,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchActionMenuElement, CustomEvent<void>>) => void,
}
