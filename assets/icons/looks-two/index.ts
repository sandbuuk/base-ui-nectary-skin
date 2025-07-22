import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLooksTwo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-looks-two', IconLooksTwo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-looks-two': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-looks-two': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-looks-two': TSinchIconReact,
    }
  }
}
