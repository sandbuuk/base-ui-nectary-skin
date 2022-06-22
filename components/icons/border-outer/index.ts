import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-border-outer', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-outer': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-border-outer': TSinchIconElement,
  }
}
