import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-file-copy', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-file-copy': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-file-copy': TSinchIconElement,
  }
}
