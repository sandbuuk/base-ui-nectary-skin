import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSchedule = createIconClass(templateHTML)
defineCustomElement('sinch-icon-schedule', IconSchedule)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-schedule': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-schedule': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-schedule': TSinchIconReact,
    }
  }
}
