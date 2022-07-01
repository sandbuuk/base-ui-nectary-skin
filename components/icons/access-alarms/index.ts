import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-access-alarms', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-access-alarms': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-access-alarms': TSinchIconElement,
  }
}
