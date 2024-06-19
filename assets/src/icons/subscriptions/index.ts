import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-subscriptions', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subscriptions': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-subscriptions': TSinchIconElement,
  }
}
