import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowBack = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-back', IconArrowBack)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-back': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-back': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-back': TSinchIconReact,
    }
  }
}
