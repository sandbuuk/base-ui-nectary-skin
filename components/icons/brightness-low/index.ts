import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-brightness-low', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-low': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-low': TSinchIconElement,
  }
}
