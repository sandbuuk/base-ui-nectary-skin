import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-brightness-6', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-6': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-6': TSinchIconElement,
  }
}
