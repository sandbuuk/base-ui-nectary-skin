import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBackupTable = createIconClass(templateHTML)
defineCustomElement('sinch-icon-backup-table', IconBackupTable)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-backup-table': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-backup-table': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-backup-table': TSinchIconReact,
    }
  }
}
