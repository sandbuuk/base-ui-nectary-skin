import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-download-done', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-download-done': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-download-done': TSinchIconElement,
  }
}
