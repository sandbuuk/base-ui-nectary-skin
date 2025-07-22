import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoCell = createIconClass(templateHTML)
defineCustomElement('sinch-icon-no-cell', IconNoCell)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-no-cell': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-no-cell': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-no-cell': TSinchIconReact,
    }
  }
}
