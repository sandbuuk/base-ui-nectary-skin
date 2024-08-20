import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-baby-changing-station', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-baby-changing-station': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-baby-changing-station': TSinchIconElement,
  }
}
