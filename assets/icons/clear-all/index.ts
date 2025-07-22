import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconClearAll = createIconClass(templateHTML)
defineCustomElement('sinch-icon-clear-all', IconClearAll)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-clear-all': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-clear-all': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-clear-all': TSinchIconReact,
    }
  }
}
