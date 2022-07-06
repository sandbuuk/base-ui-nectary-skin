import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-traffic', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-traffic': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-traffic': TSinchIconElement,
  }
}
