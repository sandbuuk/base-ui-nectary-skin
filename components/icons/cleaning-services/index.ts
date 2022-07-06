import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cleaning-services', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cleaning-services': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cleaning-services': TSinchIconElement,
  }
}
