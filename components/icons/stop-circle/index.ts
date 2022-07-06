import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-stop-circle', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stop-circle': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-stop-circle': TSinchIconElement,
  }
}
