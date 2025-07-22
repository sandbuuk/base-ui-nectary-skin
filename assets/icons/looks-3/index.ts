import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLooks3 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-looks-3', IconLooks3)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-looks-3': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-3': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-looks-3': TSinchIconReact,
    }
  }
}
