import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWest = createIconClass(templateHTML)
defineCustomElement('sinch-icon-west', IconWest)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-west': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-west': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-west': TSinchIconReact,
    }
  }
}
