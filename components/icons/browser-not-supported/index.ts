import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-browser-not-supported', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-browser-not-supported': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-browser-not-supported': TSinchIconElement,
  }
}
