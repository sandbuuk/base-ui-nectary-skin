import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-closed-caption', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-closed-caption': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-closed-caption': TSinchIconElement,
  }
}
