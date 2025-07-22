import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOpenInFull = createIconClass(templateHTML)
defineCustomElement('sinch-icon-open-in-full', IconOpenInFull)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-open-in-full': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-open-in-full': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-open-in-full': TSinchIconReact,
    }
  }
}
