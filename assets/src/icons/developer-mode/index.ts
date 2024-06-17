import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-developer-mode', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-developer-mode': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-developer-mode': TSinchIconElement,
  }
}
