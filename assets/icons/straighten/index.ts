import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStraighten = createIconClass(templateHTML)
defineCustomElement('sinch-icon-straighten', IconStraighten)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-straighten': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-straighten': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-straighten': TSinchIconReact,
    }
  }
}
