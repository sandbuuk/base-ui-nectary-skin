import type { TSinchPopoverOrientation } from '../popover'
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
  addEventListener(type: 'change', listener: (this: TSinchDropdownElement, e: CustomEvent<string>) => void): void,
  addEventListener(type: 'close', listener: (this: TSinchDropdownElement, e: CustomEvent<void>) => void): void,
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
