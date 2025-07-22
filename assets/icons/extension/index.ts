import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconExtension = createIconClass(templateHTML)
defineCustomElement('sinch-icon-extension', IconExtension)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-extension': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-extension': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-extension': TSinchIconReact,
    }
  }
}
