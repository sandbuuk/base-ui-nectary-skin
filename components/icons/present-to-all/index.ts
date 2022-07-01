import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-present-to-all', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-present-to-all': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-present-to-all': TSinchIconElement,
  }
}
