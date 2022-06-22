import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-merge-type', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-merge-type': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-merge-type': TSinchIconElement,
  }
}
