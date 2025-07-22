import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDescription = createIconClass(templateHTML)
defineCustomElement('sinch-icon-description', IconDescription)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-description': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-description': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-description': TSinchIconReact,
    }
  }
}
