import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPrecisionManufacturing = createIconClass(templateHTML)
defineCustomElement('sinch-icon-precision-manufacturing', IconPrecisionManufacturing)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-precision-manufacturing': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-precision-manufacturing': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-precision-manufacturing': TSinchIconReact,
    }
  }
}
