import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAutoDelete = createIconClass(templateHTML)
defineCustomElement('sinch-icon-auto-delete', IconAutoDelete)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-auto-delete': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-auto-delete': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-auto-delete': TSinchIconReact,
    }
  }
}
