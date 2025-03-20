import type { TSinchDialogProps } from '../dialog/types'
import type { NectaryComponentReactByType, NectaryComponentVanillaByType } from '../types'

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
