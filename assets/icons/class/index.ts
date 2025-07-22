import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconClass = createIconClass(templateHTML)
defineCustomElement('sinch-icon-class', IconClass)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-class': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-class': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-class': TSinchIconReact,
    }
  }
}
