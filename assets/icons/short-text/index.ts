import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-short-text', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-short-text': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-short-text': TSinchIconElement,
  }
}
