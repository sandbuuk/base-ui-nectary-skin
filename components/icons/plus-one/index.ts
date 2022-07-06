import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-plus-one', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-plus-one': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-plus-one': TSinchIconElement,
  }
}
