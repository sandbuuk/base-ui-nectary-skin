import type { TRect, TSinchElementReact } from '../types'

export type TSinchDialogCloseDetail = 'close' | 'escape' | 'backdrop'

export type TSinchDialogElement = HTMLElement & {
  /** Dialog caption */
  caption: string,
  readonly dialogRect: TRect,
  readonly closeButtonRect: TRect,
  /** close event handler */
  addEventListener(type: '-close', listener: (e: CustomEvent<TSinchDialogCloseDetail>) => void): void,
  /** Dialog caption */
  setAttribute(name: 'caption', value: string): void,
  /** Close button label that is used for a11y */
  setAttribute(name: 'close-aria-label', value: string): void,
}

export type TSinchDialogReact = TSinchElementReact<TSinchDialogElement> & {
  /** Controls whether the dialog should be open */
  open: boolean,
  /** Dialog caption */
  caption: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Close button label that is used for a11y */
  'close-aria-label': string,
  /** @deprecated close event handler */
  onClose?: (e: CustomEvent<TSinchDialogCloseDetail>) => void,
  /** close event handler */
  'on-close'?: (e: CustomEvent<TSinchDialogCloseDetail>) => void,
}
