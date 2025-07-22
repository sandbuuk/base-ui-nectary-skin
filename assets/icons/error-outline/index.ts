import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconErrorOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-error-outline', IconErrorOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-error-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-error-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-error-outline': TSinchIconReact,
    }
  }
}
