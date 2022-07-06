import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-electric-car', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-car': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-electric-car': TSinchIconElement,
  }
}
