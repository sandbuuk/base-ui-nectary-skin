import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMarkunread = createIconClass(templateHTML)
defineCustomElement('sinch-icon-markunread', IconMarkunread)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-markunread': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-markunread': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-markunread': TSinchIconReact,
    }
  }
}
