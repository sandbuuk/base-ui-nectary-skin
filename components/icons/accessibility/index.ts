import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-accessibility', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-accessibility': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-accessibility': TSinchIconElement,
  }
}
