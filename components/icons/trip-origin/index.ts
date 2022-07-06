import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-trip-origin', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-trip-origin': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-trip-origin': TSinchIconElement,
  }
}
