import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-party-mode', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-party-mode': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-party-mode': TSinchIconElement,
  }
}
