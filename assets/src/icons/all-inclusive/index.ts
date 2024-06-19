import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-all-inclusive', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-all-inclusive': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-all-inclusive': TSinchIconElement,
  }
}
