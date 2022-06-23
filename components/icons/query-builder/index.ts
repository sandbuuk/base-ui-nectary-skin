import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-query-builder', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-query-builder': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-query-builder': TSinchIconElement,
  }
}
