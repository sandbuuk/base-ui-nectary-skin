import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-multiple-stop', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-multiple-stop': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-multiple-stop': TSinchIconElement,
  }
}
