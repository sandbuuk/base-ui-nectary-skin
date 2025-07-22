import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconScience = createIconClass(templateHTML)
defineCustomElement('sinch-icon-science', IconScience)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-science': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-science': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-science': TSinchIconReact,
    }
  }
}
