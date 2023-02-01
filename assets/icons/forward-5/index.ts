import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-forward-5', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-forward-5': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-forward-5': TSinchIconElement,
  }
}
