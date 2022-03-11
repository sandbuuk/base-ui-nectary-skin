import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-chevron-left', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-chevron-left': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-chevron-left': TSinchIconElement,
  }
}
