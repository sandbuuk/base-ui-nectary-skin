import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-score', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-score': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-score': TSinchIconElement,
  }
}
