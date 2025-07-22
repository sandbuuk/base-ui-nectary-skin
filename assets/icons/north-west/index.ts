import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNorthWest = createIconClass(templateHTML)
defineCustomElement('sinch-icon-north-west', IconNorthWest)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-north-west': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-north-west': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-north-west': TSinchIconReact,
    }
  }
}
