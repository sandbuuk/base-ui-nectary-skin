import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-radio-button-checked', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-radio-button-checked': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-radio-button-checked': TSinchIconElement,
  }
}
