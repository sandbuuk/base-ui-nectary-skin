import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-do-not-step', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-do-not-step': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-do-not-step': TSinchIconElement,
  }
}
