import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFactCheck = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fact-check', IconFactCheck)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fact-check': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fact-check': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fact-check': TSinchIconReact,
    }
  }
}
