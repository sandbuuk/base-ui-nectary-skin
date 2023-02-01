import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-center-focus-weak', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-center-focus-weak': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-center-focus-weak': TSinchIconElement,
  }
}
