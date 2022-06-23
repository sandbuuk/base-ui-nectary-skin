import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-change-history', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-change-history': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-change-history': TSinchIconElement,
  }
}
