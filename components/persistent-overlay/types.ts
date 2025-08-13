import type { TSinchDialogProps } from '../dialog/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType, NectaryComponentReact, NectaryComponentVanilla } from '../types'

export type TSinchPersistentOverlayProps = {
  /** Controls whether the dialog should be open */
  open: TSinchDialogProps['open'],
  /** Dialog caption */
  caption: TSinchDialogProps['caption'],
  /** Label that is used for a11y */
  'aria-label': TSinchDialogProps['aria-label'],
}
export type TSinchPersistentOverlayEvents = {
  /** visibility altered event handler */
  '-visibility-altered': (e: CustomEvent) => void,
}

export type TSinchPersistentOverlayStyle = {
  // Dialog Properties
  '--sinch-dialog-close-button-display'?: string,
}

export type TSinchPersistentOverlay = {
  props: TSinchPersistentOverlayProps,
  events: TSinchPersistentOverlayEvents,
  style: TSinchPersistentOverlayStyle,
}

export type TSinchPersistentOverlayElement = NectaryComponentVanillaByType<TSinchPersistentOverlay>
export type TSinchPersistentOverlayReact = NectaryComponentReactByType<TSinchPersistentOverlay>

declare global {
  interface NectaryComponentMap {
    'sinch-persistent-overlay': TSinchPersistentOverlay,
  }

  interface HTMLElementTagNameMap {
    'sinch-persistent-overlay': NectaryComponentVanilla<'sinch-persistent-overlay'>,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-persistent-overlay': NectaryComponentReact<'sinch-persistent-overlay'>,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-persistent-overlay': NectaryComponentReact<'sinch-persistent-overlay'>,
    }
  }
}
