import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-center-focus-strong', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-center-focus-strong': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-center-focus-strong': TSinchIconElement,
  }
}
