import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-toggle-on', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-toggle-on': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-toggle-on': TSinchIconElement,
  }
}
