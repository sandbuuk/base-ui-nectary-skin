import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTableRows = createIconClass(templateHTML)
defineCustomElement('sinch-icon-table-rows', IconTableRows)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-table-rows': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-table-rows': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-table-rows': TSinchIconReact,
    }
  }
}
