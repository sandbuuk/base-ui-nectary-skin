
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-smartphone-user-in-magnifying-glass', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smartphone-user-in-magnifying-glass': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-smartphone-user-in-magnifying-glass': TSinchIconElement,
  }
}
