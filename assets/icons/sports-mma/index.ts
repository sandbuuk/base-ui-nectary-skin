import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-sports-mma', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-mma': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-sports-mma': TSinchIconElement,
  }
}
