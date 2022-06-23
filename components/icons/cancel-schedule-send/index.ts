import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-cancel-schedule-send', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-cancel-schedule-send': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-cancel-schedule-send': TSinchIconElement,
  }
}
