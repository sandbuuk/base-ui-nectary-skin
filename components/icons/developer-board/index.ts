import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-developer-board', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-developer-board': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-developer-board': TSinchIconElement,
  }
}
