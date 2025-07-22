import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLowPriority = createIconClass(templateHTML)
defineCustomElement('sinch-icon-low-priority', IconLowPriority)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-low-priority': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-low-priority': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-low-priority': TSinchIconReact,
    }
  }
}
