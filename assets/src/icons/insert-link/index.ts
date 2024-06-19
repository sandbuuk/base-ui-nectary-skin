import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-insert-link', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-link': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-insert-link': TSinchIconElement,
  }
}
