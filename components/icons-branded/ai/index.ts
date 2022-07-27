import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact } from '../types'

defineCustomElement('sinch-icon-branded-ai', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-ai': TSinchIconBrandedReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-ai': TSinchIconBrandedElement,
  }
}
