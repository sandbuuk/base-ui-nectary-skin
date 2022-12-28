import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-puzzle', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-puzzle': TSinchIconBrandedReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-puzzle': TSinchIconBrandedElement,
  }
}
