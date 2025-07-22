import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconZoomOut = createIconClass(templateHTML)
defineCustomElement('sinch-icon-zoom-out', IconZoomOut)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-zoom-out': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-zoom-out': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-zoom-out': TSinchIconReact,
    }
  }
}
