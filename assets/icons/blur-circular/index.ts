import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBlurCircular = createIconClass(templateHTML)
defineCustomElement('sinch-icon-blur-circular', IconBlurCircular)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-blur-circular': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-blur-circular': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-blur-circular': TSinchIconReact,
    }
  }
}
