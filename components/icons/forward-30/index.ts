import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-forward-30', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-forward-30': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-forward-30': TSinchIconElement,
  }
}
