import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-person-remove', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-remove': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-person-remove': TSinchIconElement,
  }
}
