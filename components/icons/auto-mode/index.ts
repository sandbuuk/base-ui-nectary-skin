import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-auto-mode', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-auto-mode': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-auto-mode': TSinchIconElement,
  }
}
