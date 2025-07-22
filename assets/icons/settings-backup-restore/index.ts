import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSettingsBackupRestore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-settings-backup-restore', IconSettingsBackupRestore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-settings-backup-restore': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-backup-restore': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-settings-backup-restore': TSinchIconReact,
    }
  }
}
