import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-gesture', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gesture': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-gesture': TSinchIconElement,
  }
}
