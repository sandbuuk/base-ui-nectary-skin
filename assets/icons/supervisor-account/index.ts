import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-supervisor-account', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-supervisor-account': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-supervisor-account': TSinchIconElement,
  }
}
