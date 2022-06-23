import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-flip-to-front', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flip-to-front': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-flip-to-front': TSinchIconElement,
  }
}
