
import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-facebook-messenger', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-facebook-messenger': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-facebook-messenger': TSinchIconElement,
  }
}
