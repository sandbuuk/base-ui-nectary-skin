import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLooks4 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-looks-4', IconLooks4)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-looks-4': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-4': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-looks-4': TSinchIconReact,
    }
  }
}
