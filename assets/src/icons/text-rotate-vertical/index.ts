import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-text-rotate-vertical', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-rotate-vertical': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-text-rotate-vertical': TSinchIconElement,
  }
}
