import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSouthWest = createIconClass(templateHTML)
defineCustomElement('sinch-icon-south-west', IconSouthWest)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-south-west': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-south-west': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-south-west': TSinchIconReact,
    }
  }
}
