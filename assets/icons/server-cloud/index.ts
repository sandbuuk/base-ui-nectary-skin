
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-server-cloud', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-server-cloud': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-server-cloud': TSinchIconElement,
  }
}
