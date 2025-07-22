import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTimer3 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-timer-3', IconTimer3)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-timer-3': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-timer-3': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-timer-3': TSinchIconReact,
    }
  }
}
