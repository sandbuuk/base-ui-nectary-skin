import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRateReview = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rate-review', IconRateReview)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rate-review': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rate-review': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rate-review': TSinchIconReact,
    }
  }
}
