import type { NectaryComponentReactByType, NectaryComponentVanillaByType, TRect, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchDialogCloseDetail = 'close' | 'escape' | 'backdrop'

export type TSinchDialogProps = {
  /** Controls whether the dialog should be open */
  open: boolean,
  /** Dialog caption */
  caption: string,
  /** Label that is used for a11y */
  'aria-label': string,
  /** Close button label that is used for a11y */
  'close-aria-label': string,
  readonly dialogRect?: TRect,
  readonly closeButtonRect?: TRect,
}

export type TSinchDialogEvents = {
  /** close event handler */
  '-close'?: (e: CustomEvent<TSinchDialogCloseDetail>) => void,
}

export type TSinchDialogStyle = {
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
}

export type TSinchDialog = {
  props: TSinchDialogProps,
  events: TSinchDialogEvents,
  style: TSinchDialogStyle,
}

export type TSinchDialogElement = NectaryComponentVanillaByType<TSinchDialog>
export type TSinchDialogReact = NectaryComponentReactByType<TSinchDialog>

declare global {
  interface NectaryComponentMap {
    'sinch-dialog': TSinchDialog,
  }

  interface HTMLElementTagNameMap {
    'sinch-dialog': NectaryComponentVanilla<'sinch-dialog'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-dialog': NectaryComponentReact<'sinch-dialog'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-dialog': NectaryComponentReact<'sinch-dialog'>,
    }
  }
}
