import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-looks-one', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-one': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-looks-one': TSinchIconElement,
  }
}
