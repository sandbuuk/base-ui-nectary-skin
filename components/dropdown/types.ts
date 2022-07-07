import type { TSinchPopoverOrientation } from '../popover/types'
import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchDropdownElement = HTMLElement & {
  open: boolean,
  multiple: boolean,
  orientation: TSinchPopoverOrientation,
  value: string,
  maxVisibleItems: number | null,
  readonly dropdownRect: TRect,
  focus(): void,
  blur(): void,
  addEventListener(type: 'change', listener: (e: CustomEvent<string>) => void): void,
  addEventListener(type: 'close', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'open', value: ''): void,
  setAttribute(name: 'multiple', value: ''): void,
  setAttribute(name: 'orientation', value: TSinchPopoverOrientation): void,
  setAttribute(name: 'value', value: string): void,
  setAttribute(name: 'maxvisibleitems', value: string): void,
}

export type TSinchDropdownReact = TSinchElementReact<TSinchDropdownElement> & {
  open: boolean,
  multiple?: boolean,
  orientation?: TSinchPopoverOrientation,
  value: string,
  maxVisibleItems?: number,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchDropdownElement, CustomEvent<void>>) => void,
  onChange: (e: SyntheticEvent<TSinchDropdownElement, CustomEvent<string>>) => void,
}
