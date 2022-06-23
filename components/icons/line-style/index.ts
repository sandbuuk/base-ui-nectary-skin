import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-line-style', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-line-style': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-line-style': TSinchIconElement,
  }
}
