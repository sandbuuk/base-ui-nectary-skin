import type { TRect, TSinchElementReact } from '../types'
import type { SyntheticEvent } from 'react'

export type TSinchDialogElement = HTMLElement & {
  caption: string,
  readonly dialogRect: TRect,
  readonly closeButtonRect: TRect,
  addEventListener(type: 'close', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'caption', value: string): void,
}

export type TSinchDialogReact = TSinchElementReact<TSinchDialogElement> & {
  open: boolean,
  caption: string,
  'aria-label': string,
  onClose: (event: SyntheticEvent<TSinchDialogElement, CustomEvent<void>>) => void,
}
