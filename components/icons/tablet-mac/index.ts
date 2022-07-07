import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-tablet-mac', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tablet-mac': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-tablet-mac': TSinchIconElement,
  }
}
