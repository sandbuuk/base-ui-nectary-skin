import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFamilyRestroom = createIconClass(templateHTML)
defineCustomElement('sinch-icon-family-restroom', IconFamilyRestroom)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-family-restroom': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-family-restroom': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-family-restroom': TSinchIconReact,
    }
  }
}
