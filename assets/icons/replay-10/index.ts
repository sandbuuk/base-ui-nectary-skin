import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-replay-10', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-replay-10': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-replay-10': TSinchIconElement,
  }
}
