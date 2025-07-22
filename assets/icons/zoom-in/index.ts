import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconZoomIn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-zoom-in', IconZoomIn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-zoom-in': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-zoom-in': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-zoom-in': TSinchIconReact,
    }
  }
}
