import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-battery-unknown', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-battery-unknown': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-battery-unknown': TSinchIconElement,
  }
}
