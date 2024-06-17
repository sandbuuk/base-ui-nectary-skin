import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-more-horiz', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-more-horiz': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-more-horiz': TSinchIconElement,
  }
}
