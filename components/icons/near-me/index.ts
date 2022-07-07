import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-near-me', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-near-me': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-near-me': TSinchIconElement,
  }
}
