import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPreview = createIconClass(templateHTML)
defineCustomElement('sinch-icon-preview', IconPreview)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-preview': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-preview': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-preview': TSinchIconReact,
    }
  }
}
