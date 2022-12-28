import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-make-it-happen', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-make-it-happen': TSinchIconBrandedReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-make-it-happen': TSinchIconBrandedElement,
  }
}
