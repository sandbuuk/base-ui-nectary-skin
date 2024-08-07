
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-scale-balanced', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-scale-balanced': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-scale-balanced': TSinchIconElement,
  }
}
