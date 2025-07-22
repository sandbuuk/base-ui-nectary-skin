import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSelectAll = createIconClass(templateHTML)
defineCustomElement('sinch-icon-select-all', IconSelectAll)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-select-all': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-select-all': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-select-all': TSinchIconReact,
    }
  }
}
