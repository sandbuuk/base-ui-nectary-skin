import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconThumbUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-thumb-up', IconThumbUp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-thumb-up': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thumb-up': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-thumb-up': TSinchIconReact,
    }
  }
}
