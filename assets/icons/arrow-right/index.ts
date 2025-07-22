import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowRight = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-right', IconArrowRight)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-right': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-right': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-right': TSinchIconReact,
    }
  }
}
