import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssessment = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assessment', IconAssessment)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assessment': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assessment': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assessment': TSinchIconReact,
    }
  }
}
