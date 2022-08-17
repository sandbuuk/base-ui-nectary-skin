import type { TRect, TSinchElementReact } from '../types'

export type TSinchDialogElement = HTMLElement & {
  caption: string,
  readonly dialogRect: TRect,
  readonly closeButtonRect: TRect,
  addEventListener(type: '-close', listener: (e: CustomEvent<void>) => void): void,
  setAttribute(name: 'caption', value: string): void,
  setAttribute(name: 'close-aria-label', value: string): void,
}

export type TSinchDialogReact = TSinchElementReact<TSinchDialogElement> & {
  open: boolean,
  caption: string,
  'aria-label': string,
  'close-aria-label': string,
  onClose?: () => void,
  'on-close'?: (e: CustomEvent<void>) => void,
}
