import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-import-export', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-import-export': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-import-export': TSinchIconElement,
  }
}
