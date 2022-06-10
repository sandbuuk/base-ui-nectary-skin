import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-first-page', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-first-page': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-first-page': TSinchIconElement,
  }
}
