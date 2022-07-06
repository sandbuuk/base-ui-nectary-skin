import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-flare', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flare': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-flare': TSinchIconElement,
  }
}
