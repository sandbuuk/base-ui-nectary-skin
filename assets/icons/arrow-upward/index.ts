import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowUpward = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-upward', IconArrowUpward)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-upward': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-upward': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-upward': TSinchIconReact,
    }
  }
}
