import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRoom = createIconClass(templateHTML)
defineCustomElement('sinch-icon-room', IconRoom)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-room': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-room': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-room': TSinchIconReact,
    }
  }
}
