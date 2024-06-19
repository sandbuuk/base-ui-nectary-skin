import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-switch-right', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-switch-right': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-switch-right': TSinchIconElement,
  }
}
