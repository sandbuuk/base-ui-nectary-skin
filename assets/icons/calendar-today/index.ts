import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCalendarToday = createIconClass(templateHTML)
defineCustomElement('sinch-icon-calendar-today', IconCalendarToday)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-calendar-today': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-calendar-today': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-calendar-today': TSinchIconReact,
    }
  }
}
