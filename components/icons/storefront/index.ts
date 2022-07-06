import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-storefront', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-storefront': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-storefront': TSinchIconElement,
  }
}
