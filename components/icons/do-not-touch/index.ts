import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-do-not-touch', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-do-not-touch': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-do-not-touch': TSinchIconElement,
  }
}
