
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-tag', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tag': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-tag': TSinchIconElement,
  }
}
