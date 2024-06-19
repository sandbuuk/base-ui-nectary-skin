import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-local-cafe', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-cafe': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-local-cafe': TSinchIconElement,
  }
}
