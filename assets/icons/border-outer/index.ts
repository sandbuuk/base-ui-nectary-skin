import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBorderOuter = createIconClass(templateHTML)
defineCustomElement('sinch-icon-border-outer', IconBorderOuter)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-border-outer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-border-outer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-border-outer': TSinchIconReact,
    }
  }
}
