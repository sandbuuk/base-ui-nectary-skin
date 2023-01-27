import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-list-alt', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-list-alt': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-list-alt': TSinchIconElement,
  }
}
