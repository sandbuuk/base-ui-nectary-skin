import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoreTime = createIconClass(templateHTML)
defineCustomElement('sinch-icon-more-time', IconMoreTime)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-more-time': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-more-time': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-more-time': TSinchIconReact,
    }
  }
}
