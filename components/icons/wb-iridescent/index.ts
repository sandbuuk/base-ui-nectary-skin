import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-wb-iridescent', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wb-iridescent': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-wb-iridescent': TSinchIconElement,
  }
}
