import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHistory = createIconClass(templateHTML)
defineCustomElement('sinch-icon-history', IconHistory)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-history': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-history': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-history': TSinchIconReact,
    }
  }
}
