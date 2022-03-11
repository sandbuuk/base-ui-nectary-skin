import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-arrow-forward-ios', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-forward-ios': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-forward-ios': TSinchIconElement,
  }
}
