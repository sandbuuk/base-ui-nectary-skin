import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMoped = createIconClass(templateHTML)
defineCustomElement('sinch-icon-moped', IconMoped)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-moped': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-moped': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-moped': TSinchIconReact,
    }
  }
}
