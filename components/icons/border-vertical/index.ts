import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-border-vertical', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-vertical': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-border-vertical': TSinchIconElement,
  }
}
