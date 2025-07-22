import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFilter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-filter', IconFilter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-filter': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-filter': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-filter': TSinchIconReact,
    }
  }
}
