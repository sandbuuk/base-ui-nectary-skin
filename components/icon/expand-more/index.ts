import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-expand-more', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-expand-more': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-expand-more': TSinchIconElement,
  }
}
