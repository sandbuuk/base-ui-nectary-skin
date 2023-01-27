import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-line-weight', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-line-weight': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-line-weight': TSinchIconElement,
  }
}
