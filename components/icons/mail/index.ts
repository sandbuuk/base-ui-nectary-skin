import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mail', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mail': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mail': TSinchIconElement,
  }
}
