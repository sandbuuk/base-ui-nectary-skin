import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sentiment-dissatisfied', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sentiment-dissatisfied': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sentiment-dissatisfied': TSinchIconElement,
  }
}
