import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-low-priority', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-low-priority': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-low-priority': TSinchIconElement,
  }
}
