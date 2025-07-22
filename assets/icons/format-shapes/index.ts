import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFormatShapes = createIconClass(templateHTML)
defineCustomElement('sinch-icon-format-shapes', IconFormatShapes)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-format-shapes': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-format-shapes': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-format-shapes': TSinchIconReact,
    }
  }
}
