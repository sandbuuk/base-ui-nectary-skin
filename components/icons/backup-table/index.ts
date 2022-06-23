import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-backup-table', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-backup-table': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-backup-table': TSinchIconElement,
  }
}
