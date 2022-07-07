import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-looks-3', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-3': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-looks-3': TSinchIconElement,
  }
}
