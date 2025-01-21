import type { TSinchDialogElement, TSinchDialogReact } from '../dialog/types'
import type { TSinchElementReact } from '../types'

export type TSinchPersistentOverlayElement = HTMLElement & {
  /** Open/close state */
  open: TSinchDialogElement['open'],
  /** Dialog caption */
  caption: TSinchDialogElement['caption'],
  /** Dialog caption */
  setAttribute(name: 'caption', value: TSinchDialogElement['caption']): void,
  /** visibility altered event handler */
  addEventListener(
    type: '-visibility-altered',
    listener: (e: CustomEvent) => void
  ): void,
}

export type TSinchPersistentOverlayReact =
  TSinchElementReact<TSinchPersistentOverlayElement> & {
    /** Controls whether the dialog should be open */
    open: TSinchDialogReact['open'],
    /** Dialog caption */
    caption: TSinchDialogReact['caption'],
    /** Label that is used for a11y */
    'aria-label': TSinchDialogReact['aria-label'],
    /** visibility altered event handler */
    'on-visibility-altered': (e: CustomEvent) => void,
  } & {
    style?: {
      // Dialog Properties
      '--sinch-dialog-close-button-display'?: string,
    },
  }
