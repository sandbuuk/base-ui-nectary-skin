import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOpenInNew = createIconClass(templateHTML)
defineCustomElement('sinch-icon-open-in-new', IconOpenInNew)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-open-in-new': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-open-in-new': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-open-in-new': TSinchIconReact,
    }
  }
}
