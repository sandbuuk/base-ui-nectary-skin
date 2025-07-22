import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCallEnd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-call-end', IconCallEnd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-call-end': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-call-end': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-call-end': TSinchIconReact,
    }
  }
}
