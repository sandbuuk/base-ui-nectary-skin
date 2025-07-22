import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTwoWheeler = createIconClass(templateHTML)
defineCustomElement('sinch-icon-two-wheeler', IconTwoWheeler)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-two-wheeler': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-two-wheeler': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-two-wheeler': TSinchIconReact,
    }
  }
}
