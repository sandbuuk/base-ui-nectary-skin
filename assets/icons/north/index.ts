import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNorth = createIconClass(templateHTML)
defineCustomElement('sinch-icon-north', IconNorth)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-north': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-north': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-north': TSinchIconReact,
    }
  }
}
