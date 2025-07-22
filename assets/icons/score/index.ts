import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconScore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-score', IconScore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-score': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-score': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-score': TSinchIconReact,
    }
  }
}
