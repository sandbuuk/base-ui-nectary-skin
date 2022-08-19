import type { TSinchPopoverOrientation } from '../popover/types'
import type { TRect, TSinchElementReact } from '../types'

export type TSinchActionMenuElement = HTMLElement & {
  open: boolean,
  orientation: TSinchPopoverOrientation,
  maxVisibleItems: number | null,
  modal: boolean,
  readonly dropdownRect: TRect,
  addEventListener(type: '-close', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'open', value: ''): void,
  setAttribute(name: 'orientation', value: TSinchPopoverOrientation): void,
  setAttribute(name: 'maxvisibleitems', value: string): void,
  setAttribute(name: 'modal', value: boolean): void,
}

export type TSinchActionMenuReact = TSinchElementReact<TSinchActionMenuElement> & {
  open: boolean,
  orientation?: TSinchPopoverOrientation,
  maxVisibleItems?: number,
  modal?: boolean,
  'aria-label': string,
  onClose?: () => void,
  'on-close'?: (e: CustomEvent<void>) => void,
}
