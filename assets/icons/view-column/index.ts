import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewColumn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-column', IconViewColumn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-column': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-column': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-column': TSinchIconReact,
    }
  }
}
