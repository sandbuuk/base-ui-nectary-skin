import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReorder = createIconClass(templateHTML)
defineCustomElement('sinch-icon-reorder', IconReorder)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-reorder': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-reorder': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-reorder': TSinchIconReact,
    }
  }
}
