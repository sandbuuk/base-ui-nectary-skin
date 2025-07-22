import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoreVert = createIconClass(templateHTML)
defineCustomElement('sinch-icon-more-vert', IconMoreVert)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-more-vert': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-more-vert': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-more-vert': TSinchIconReact,
    }
  }
}
