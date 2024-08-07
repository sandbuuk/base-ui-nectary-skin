
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-smartphone-circle-question', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smartphone-circle-question': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-smartphone-circle-question': TSinchIconElement,
  }
}
