import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-curtains', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-curtains': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-curtains': TSinchIconElement,
  }
}
