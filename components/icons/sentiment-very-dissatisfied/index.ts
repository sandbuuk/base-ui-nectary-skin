import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sentiment-very-dissatisfied', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-very-dissatisfied': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-very-dissatisfied': TSinchIconElement,
  }
}
