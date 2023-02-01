import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-menu-book', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-menu-book': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-menu-book': TSinchIconElement,
  }
}
