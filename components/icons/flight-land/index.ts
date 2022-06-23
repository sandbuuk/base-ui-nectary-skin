import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-flight-land', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flight-land': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-flight-land': TSinchIconElement,
  }
}
