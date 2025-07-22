import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowForward = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-forward', IconArrowForward)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-forward': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-forward': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-forward': TSinchIconReact,
    }
  }
}
