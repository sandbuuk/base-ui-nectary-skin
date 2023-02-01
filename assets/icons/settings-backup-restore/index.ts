import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-settings-backup-restore', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-settings-backup-restore': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-settings-backup-restore': TSinchIconElement,
  }
}
