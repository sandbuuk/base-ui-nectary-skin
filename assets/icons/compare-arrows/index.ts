import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCompareArrows = createIconClass(templateHTML)
defineCustomElement('sinch-icon-compare-arrows', IconCompareArrows)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-compare-arrows': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-compare-arrows': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-compare-arrows': TSinchIconReact,
    }
  }
}
