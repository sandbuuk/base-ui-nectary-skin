import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-card-travel', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-card-travel': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-card-travel': TSinchIconElement,
  }
}
