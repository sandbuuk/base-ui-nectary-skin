
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-square-list-gear', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-square-list-gear': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-square-list-gear': TSinchIconElement,
  }
}
