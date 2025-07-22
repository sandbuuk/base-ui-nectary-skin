import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPolicy = createIconClass(templateHTML)
defineCustomElement('sinch-icon-policy', IconPolicy)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-policy': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-policy': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-policy': TSinchIconReact,
    }
  }
}
