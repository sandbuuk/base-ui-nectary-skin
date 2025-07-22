import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTty = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tty', IconTty)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tty': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tty': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tty': TSinchIconReact,
    }
  }
}
