import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-local-drink', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-drink': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-local-drink': TSinchIconElement,
  }
}
