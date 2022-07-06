import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-euro', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-euro': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-euro': TSinchIconElement,
  }
}
