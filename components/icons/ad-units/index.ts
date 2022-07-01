import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-ad-units', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-ad-units': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-ad-units': TSinchIconElement,
  }
}
