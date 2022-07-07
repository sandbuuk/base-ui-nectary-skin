import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-skip-next', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-skip-next': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-skip-next': TSinchIconElement,
  }
}
