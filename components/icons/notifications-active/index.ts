import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-notifications-active', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notifications-active': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-notifications-active': TSinchIconElement,
  }
}
