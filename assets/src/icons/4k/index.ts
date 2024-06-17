import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-4k', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-4k': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-4k': TSinchIconElement,
  }
}
