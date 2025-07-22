import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCheckroom = createIconClass(templateHTML)
defineCustomElement('sinch-icon-checkroom', IconCheckroom)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-checkroom': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-checkroom': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-checkroom': TSinchIconReact,
    }
  }
}
