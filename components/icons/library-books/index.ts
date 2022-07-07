import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-library-books', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-library-books': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-library-books': TSinchIconElement,
  }
}
