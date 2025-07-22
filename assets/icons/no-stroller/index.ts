import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoStroller = createIconClass(templateHTML)
defineCustomElement('sinch-icon-no-stroller', IconNoStroller)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-no-stroller': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-stroller': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-no-stroller': TSinchIconReact,
    }
  }
}
