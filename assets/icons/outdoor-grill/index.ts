import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-outdoor-grill', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-outdoor-grill': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-outdoor-grill': TSinchIconElement,
  }
}
