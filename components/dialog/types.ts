import type { TRect, TSinchElementReact } from '../types'

export type TSinchDialogCloseDetail = 'close' | 'escape' | 'backdrop'

export type TSinchDialogElement = HTMLElement & {
  /** Open/close state */
  open: boolean,
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
  /** close event handler */
  'on-close'?: (e: CustomEvent<TSinchDialogCloseDetail>) => void,
} & {
  style?: {
    // Component Properties
    '--sinch-comp-dialog-max-width'?: string,
    '--sinch-comp-dialog-max-height'?: string,
    '--sinch-comp-dialog-width'?: string,
    '--sinch-dialog-close-button-display'?: string,

    // Shape
    '--sinch-comp-dialog-shape-radius'?: string,

    // Fonts
    '--sinch-comp-dialog-font-title'?: string,

    // Shadows
    '--sinch-comp-dialog-shadow'?: string,

    // Colors - Default State
    '--sinch-comp-dialog-color-default-background-initial'?: string,
    '--sinch-comp-dialog-color-default-icon-initial'?: string,
    '--sinch-comp-dialog-color-default-title-initial'?: string,

    // Global Properties
    '--sinch-global-size-icon'?: string,
    '--sinch-global-color-icon'?: string,
    '--sinch-global-color-text'?: string,
    '--sinch-comp-title-font'?: string,
  },
}
