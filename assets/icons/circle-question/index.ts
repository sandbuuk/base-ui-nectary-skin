
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-circle-question', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-circle-question': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-circle-question': TSinchIconElement,
  }
}
