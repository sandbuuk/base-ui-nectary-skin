import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOpenWith = createIconClass(templateHTML)
defineCustomElement('sinch-icon-open-with', IconOpenWith)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-open-with': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-open-with': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-open-with': TSinchIconReact,
    }
  }
}
