import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowDownward = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-downward', IconArrowDownward)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-downward': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-downward': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-downward': TSinchIconReact,
    }
  }
}
