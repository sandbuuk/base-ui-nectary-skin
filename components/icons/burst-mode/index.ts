import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-burst-mode', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-burst-mode': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-burst-mode': TSinchIconElement,
  }
}
