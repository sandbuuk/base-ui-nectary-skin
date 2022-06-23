import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-admin-panel-settings', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-admin-panel-settings': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-admin-panel-settings': TSinchIconElement,
  }
}
