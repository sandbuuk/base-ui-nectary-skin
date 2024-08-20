import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-switch-left', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-switch-left': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-switch-left': TSinchIconElement,
  }
}
