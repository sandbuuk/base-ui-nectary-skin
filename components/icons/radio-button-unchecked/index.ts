import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-radio-button-unchecked', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-radio-button-unchecked': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-radio-button-unchecked': TSinchIconElement,
  }
}
