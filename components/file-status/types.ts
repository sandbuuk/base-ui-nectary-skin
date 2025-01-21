import type { TSinchElementReact } from '../types'

export type TSinchFileStatusType = 'pending' | 'loading' | 'progress' | 'success' | 'error'

export type TSinchFileStatusElement = HTMLElement & {
  /** File status type */
  type: TSinchFileStatusType,
  /** File name */
  filename: string,
  /** File status type */
  setAttribute(name: 'type', value: TSinchFileStatusType): void,
  /** File name */
  setAttribute(name: 'filename', value: string): void,
}

export type TSinchFileStatusReact = TSinchElementReact<TSinchFileStatusElement> & {
  /** File status type */
  type: TSinchFileStatusType,
  /** File name */
  filename: string,
} & {
  style?: {
    // Shape
    '--sinch-comp-file-status-shape-radius'?: string,

    // Colors - Error State
    '--sinch-comp-file-status-color-error-background'?: string,
    '--sinch-comp-file-status-color-error-text'?: string,
    '--sinch-comp-file-status-color-error-icon'?: string,

    // Colors - Success State
    '--sinch-comp-file-status-color-success-background'?: string,
    '--sinch-comp-file-status-color-success-text'?: string,
    '--sinch-comp-file-status-color-success-icon'?: string,

    // Colors - Pending State
    '--sinch-comp-file-status-color-pending-background'?: string,
    '--sinch-comp-file-status-color-pending-text'?: string,
    '--sinch-comp-file-status-color-pending-icon'?: string,

    // Colors - Progress State
    '--sinch-comp-file-status-color-progress-background'?: string,
    '--sinch-comp-file-status-color-progress-text'?: string,
    '--sinch-comp-file-status-color-progress-icon'?: string,

    // Colors - Loading State
    '--sinch-comp-file-status-color-loading-background'?: string,
    '--sinch-comp-file-status-color-loading-text'?: string,
    '--sinch-comp-file-status-color-loading-icon'?: string,

    // Global Properties
    '--sinch-global-color-text'?: string,
    '--sinch-global-color-icon'?: string,
  },
}
