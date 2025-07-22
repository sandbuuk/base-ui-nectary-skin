import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconElevator = createIconClass(templateHTML)
defineCustomElement('sinch-icon-elevator', IconElevator)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-elevator': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-elevator': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-elevator': TSinchIconReact,
    }
  }
}
