import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHttps = createIconClass(templateHTML)
defineCustomElement('sinch-icon-https', IconHttps)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-https': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-https': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-https': TSinchIconReact,
    }
  }
}
