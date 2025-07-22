import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMicrowave = createIconClass(templateHTML)
defineCustomElement('sinch-icon-microwave', IconMicrowave)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-microwave': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-microwave': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-microwave': TSinchIconReact,
    }
  }
}
