import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-where-to-vote', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-where-to-vote': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-where-to-vote': TSinchIconElement,
  }
}
