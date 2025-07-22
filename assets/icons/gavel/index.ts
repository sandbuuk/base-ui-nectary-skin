import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGavel = createIconClass(templateHTML)
defineCustomElement('sinch-icon-gavel', IconGavel)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-gavel': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-gavel': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-gavel': TSinchIconReact,
    }
  }
}
