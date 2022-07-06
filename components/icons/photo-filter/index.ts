import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-photo-filter', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-filter': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-photo-filter': TSinchIconElement,
  }
}
