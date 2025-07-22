import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMemory = createIconClass(templateHTML)
defineCustomElement('sinch-icon-memory', IconMemory)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-memory': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-memory': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-memory': TSinchIconReact,
    }
  }
}
