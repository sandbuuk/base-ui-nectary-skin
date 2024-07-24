import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-text-snippet', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-snippet': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-text-snippet': TSinchIconElement,
  }
}
