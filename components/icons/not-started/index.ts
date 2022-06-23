import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-not-started', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-not-started': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-not-started': TSinchIconElement,
  }
}
