import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLabel = createIconClass(templateHTML)
defineCustomElement('sinch-icon-label', IconLabel)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-label': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-label': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-label': TSinchIconReact,
    }
  }
}
