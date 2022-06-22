import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-vertical-align-bottom', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vertical-align-bottom': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-vertical-align-bottom': TSinchIconElement,
  }
}
