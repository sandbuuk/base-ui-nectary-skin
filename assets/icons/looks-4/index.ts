import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-looks-4', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-4': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-looks-4': TSinchIconElement,
  }
}
