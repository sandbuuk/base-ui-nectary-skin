import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-stop', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stop': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-stop': TSinchIconElement,
  }
}
