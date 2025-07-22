import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTransform = createIconClass(templateHTML)
defineCustomElement('sinch-icon-transform', IconTransform)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-transform': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-transform': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-transform': TSinchIconReact,
    }
  }
}
