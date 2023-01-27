import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-attach-money', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-attach-money': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-attach-money': TSinchIconElement,
  }
}
