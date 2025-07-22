import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLooks6 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-looks-6', IconLooks6)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-looks-6': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-6': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-looks-6': TSinchIconReact,
    }
  }
}
