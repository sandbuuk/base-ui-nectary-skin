import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArrowCircleDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-arrow-circle-down', IconArrowCircleDown)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-arrow-circle-down': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-arrow-circle-down': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-arrow-circle-down': TSinchIconReact,
    }
  }
}
