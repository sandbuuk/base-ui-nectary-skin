
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-fa-rectangle-ad', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fa-rectangle-ad': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-fa-rectangle-ad': TSinchIconElement,
  }
}
