import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-exposure-neg-2', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exposure-neg-2': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-exposure-neg-2': TSinchIconElement,
  }
}
