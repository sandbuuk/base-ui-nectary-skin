import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTextFormat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-text-format', IconTextFormat)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-text-format': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-text-format': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-text-format': TSinchIconReact,
    }
  }
}
