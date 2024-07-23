import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-calendar-view-day', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-calendar-view-day': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-calendar-view-day': TSinchIconElement,
  }
}
