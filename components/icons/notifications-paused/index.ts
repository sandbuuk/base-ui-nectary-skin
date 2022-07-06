import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-notifications-paused', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notifications-paused': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-notifications-paused': TSinchIconElement,
  }
}
