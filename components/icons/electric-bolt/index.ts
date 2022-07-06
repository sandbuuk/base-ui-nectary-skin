import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-electric-bolt', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-electric-bolt': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-electric-bolt': TSinchIconElement,
  }
}
