import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDelete = createIconClass(templateHTML)
defineCustomElement('sinch-icon-delete', IconDelete)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-delete': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-delete': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-delete': TSinchIconReact,
    }
  }
}
