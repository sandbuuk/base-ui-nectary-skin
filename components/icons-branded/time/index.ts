import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-time', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-time': TSinchIconBrandedReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-time': TSinchIconBrandedElement,
  }
}
