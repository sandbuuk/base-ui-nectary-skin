import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowCircleUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-circle-up', IconArrowCircleUp)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-circle-up': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-circle-up': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-circle-up': TSinchIconReact,
    }
  }
}
