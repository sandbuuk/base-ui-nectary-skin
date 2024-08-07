
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-person-female', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-female': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-person-female': TSinchIconElement,
  }
}
