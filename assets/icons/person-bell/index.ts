
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-person-bell', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-person-bell': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-person-bell': TSinchIconElement,
  }
}
