import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-color-lens', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-color-lens': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-color-lens': TSinchIconElement,
  }
}
