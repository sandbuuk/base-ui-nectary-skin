import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-horizontal-split', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-horizontal-split': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-horizontal-split': TSinchIconElement,
  }
}
