import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-group-work', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-group-work': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-group-work': TSinchIconElement,
  }
}
