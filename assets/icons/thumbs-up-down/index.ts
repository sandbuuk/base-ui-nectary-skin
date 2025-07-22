import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconThumbsUpDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-thumbs-up-down', IconThumbsUpDown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-thumbs-up-down': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thumbs-up-down': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-thumbs-up-down': TSinchIconReact,
    }
  }
}
