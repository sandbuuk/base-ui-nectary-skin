import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWeekend = createIconClass(templateHTML)
defineCustomElement('sinch-icon-weekend', IconWeekend)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-weekend': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-weekend': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-weekend': TSinchIconReact,
    }
  }
}
