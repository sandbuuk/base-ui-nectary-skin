import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccessible = createIconClass(templateHTML)
defineCustomElement('sinch-icon-accessible', IconAccessible)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-accessible': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-accessible': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-accessible': TSinchIconReact,
    }
  }
}
