import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-access-time', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-access-time': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-access-time': TSinchIconElement,
  }
}
