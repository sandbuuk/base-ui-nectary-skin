import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-no-stroller', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-stroller': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-no-stroller': TSinchIconElement,
  }
}
