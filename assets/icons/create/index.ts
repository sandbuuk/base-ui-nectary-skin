import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCreate = createIconClass(templateHTML)
defineCustomElement('sinch-icon-create', IconCreate)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-create': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-create': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-create': TSinchIconReact,
    }
  }
}
