import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-notifications-none', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notifications-none': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-notifications-none': TSinchIconElement,
  }
}
