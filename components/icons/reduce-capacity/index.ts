import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-reduce-capacity', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-reduce-capacity': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-reduce-capacity': TSinchIconElement,
  }
}
