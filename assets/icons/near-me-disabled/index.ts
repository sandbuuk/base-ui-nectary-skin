import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNearMeDisabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-near-me-disabled', IconNearMeDisabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-near-me-disabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-near-me-disabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-near-me-disabled': TSinchIconReact,
    }
  }
}
