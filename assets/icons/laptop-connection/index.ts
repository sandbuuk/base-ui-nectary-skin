
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-laptop-connection', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-laptop-connection': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-laptop-connection': TSinchIconElement,
  }
}
