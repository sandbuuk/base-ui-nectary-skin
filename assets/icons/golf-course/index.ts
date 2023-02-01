import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-golf-course', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-golf-course': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-golf-course': TSinchIconElement,
  }
}
