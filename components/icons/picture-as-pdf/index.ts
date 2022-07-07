import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-picture-as-pdf', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-picture-as-pdf': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-picture-as-pdf': TSinchIconElement,
  }
}
