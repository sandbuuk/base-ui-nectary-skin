import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-chrome-reader-mode', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-chrome-reader-mode': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-chrome-reader-mode': TSinchIconElement,
  }
}
