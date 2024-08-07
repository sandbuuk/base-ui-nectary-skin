
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-persons', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-persons': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-persons': TSinchIconElement,
  }
}
