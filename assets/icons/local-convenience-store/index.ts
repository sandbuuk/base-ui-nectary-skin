import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-local-convenience-store', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-convenience-store': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-local-convenience-store': TSinchIconElement,
  }
}
