import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUpload = createIconClass(templateHTML)
defineCustomElement('sinch-icon-upload', IconUpload)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-upload': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-upload': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-upload': TSinchIconReact,
    }
  }
}
