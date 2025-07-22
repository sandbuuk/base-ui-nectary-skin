import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAccessibility = createIconClass(templateHTML)
defineCustomElement('sinch-icon-accessibility', IconAccessibility)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-accessibility': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-accessibility': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-accessibility': TSinchIconReact,
    }
  }
}
