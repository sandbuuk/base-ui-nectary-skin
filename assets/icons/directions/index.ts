import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDirections = createIconClass(templateHTML)
defineCustomElement('sinch-icon-directions', IconDirections)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-directions': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-directions': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-directions': TSinchIconReact,
    }
  }
}
