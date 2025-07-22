import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHighQuality = createIconClass(templateHTML)
defineCustomElement('sinch-icon-high-quality', IconHighQuality)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-high-quality': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-high-quality': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-high-quality': TSinchIconReact,
    }
  }
}
