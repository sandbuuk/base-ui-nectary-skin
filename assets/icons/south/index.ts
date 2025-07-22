import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSouth = createIconClass(templateHTML)
defineCustomElement('sinch-icon-south', IconSouth)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-south': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-south': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-south': TSinchIconReact,
    }
  }
}
