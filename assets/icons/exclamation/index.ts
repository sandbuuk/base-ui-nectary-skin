import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExclamation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-exclamation', IconExclamation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-exclamation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-exclamation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-exclamation': TSinchIconReact,
    }
  }
}
