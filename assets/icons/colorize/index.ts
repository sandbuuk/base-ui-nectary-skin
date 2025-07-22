import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconColorize = createIconClass(templateHTML)
defineCustomElement('sinch-icon-colorize', IconColorize)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-colorize': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-colorize': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-colorize': TSinchIconReact,
    }
  }
}
