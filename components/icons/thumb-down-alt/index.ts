import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-thumb-down-alt', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thumb-down-alt': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-thumb-down-alt': TSinchIconElement,
  }
}
