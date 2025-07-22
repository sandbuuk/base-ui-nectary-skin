import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPending = createIconClass(templateHTML)
defineCustomElement('sinch-icon-pending', IconPending)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-pending': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-pending': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-pending': TSinchIconReact,
    }
  }
}
