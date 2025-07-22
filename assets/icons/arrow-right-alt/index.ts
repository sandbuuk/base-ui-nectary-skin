import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowRightAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-right-alt', IconArrowRightAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-right-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-right-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-right-alt': TSinchIconReact,
    }
  }
}
