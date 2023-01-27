import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-arrow-forward', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-forward': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-forward': TSinchIconElement,
  }
}
