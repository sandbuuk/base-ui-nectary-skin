import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconQueryBuilder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-query-builder', IconQueryBuilder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-query-builder': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-query-builder': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-query-builder': TSinchIconReact,
    }
  }
}
