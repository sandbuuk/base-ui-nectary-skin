import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFreeBreakfast = createIconClass(templateHTML)
defineCustomElement('sinch-icon-free-breakfast', IconFreeBreakfast)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-free-breakfast': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-free-breakfast': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-free-breakfast': TSinchIconReact,
    }
  }
}
