import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewQuilt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-quilt', IconViewQuilt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-quilt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-quilt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-quilt': TSinchIconReact,
    }
  }
}
