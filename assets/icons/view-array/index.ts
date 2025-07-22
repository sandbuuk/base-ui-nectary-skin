import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewArray = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-array', IconViewArray)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-array': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-array': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-array': TSinchIconReact,
    }
  }
}
