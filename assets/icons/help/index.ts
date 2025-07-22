import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHelp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-help', IconHelp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-help': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-help': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-help': TSinchIconReact,
    }
  }
}
