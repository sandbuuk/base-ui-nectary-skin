import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCheckBoxOutlineBlank = createIconClass(templateHTML)
defineCustomElement('sinch-icon-check-box-outline-blank', IconCheckBoxOutlineBlank)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-check-box-outline-blank': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-check-box-outline-blank': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-check-box-outline-blank': TSinchIconReact,
    }
  }
}
