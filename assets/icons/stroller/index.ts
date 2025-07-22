import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStroller = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stroller', IconStroller)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stroller': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stroller': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stroller': TSinchIconReact,
    }
  }
}
