import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-grading', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-grading': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-grading': TSinchIconElement,
  }
}
