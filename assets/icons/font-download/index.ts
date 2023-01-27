import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-font-download', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-font-download': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-font-download': TSinchIconElement,
  }
}
