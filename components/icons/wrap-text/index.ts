import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wrap-text', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wrap-text': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wrap-text': TSinchIconElement,
  }
}
