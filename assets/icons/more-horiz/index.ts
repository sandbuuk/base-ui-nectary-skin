import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoreHoriz = createIconClass(templateHTML)
defineCustomElement('sinch-icon-more-horiz', IconMoreHoriz)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-more-horiz': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-more-horiz': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-more-horiz': TSinchIconReact,
    }
  }
}
