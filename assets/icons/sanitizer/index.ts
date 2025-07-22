import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSanitizer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sanitizer', IconSanitizer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sanitizer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sanitizer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sanitizer': TSinchIconReact,
    }
  }
}
