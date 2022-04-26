import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-last-page', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-last-page': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-last-page': TSinchIconElement,
  }
}
