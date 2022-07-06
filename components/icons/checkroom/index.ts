import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-checkroom', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-checkroom': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-checkroom': TSinchIconElement,
  }
}
