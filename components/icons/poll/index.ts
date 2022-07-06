import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-poll', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-poll': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-poll': TSinchIconElement,
  }
}
