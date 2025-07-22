import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNightsStay = createIconClass(templateHTML)
defineCustomElement('sinch-icon-nights-stay', IconNightsStay)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-nights-stay': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-nights-stay': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-nights-stay': TSinchIconReact,
    }
  }
}
