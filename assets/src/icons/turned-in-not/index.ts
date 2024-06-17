import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-turned-in-not', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-turned-in-not': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-turned-in-not': TSinchIconElement,
  }
}
