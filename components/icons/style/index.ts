import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-style', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-style': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-style': TSinchIconElement,
  }
}
