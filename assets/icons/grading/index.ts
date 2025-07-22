import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGrading = createIconClass(templateHTML)
defineCustomElement('sinch-icon-grading', IconGrading)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-grading': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-grading': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-grading': TSinchIconReact,
    }
  }
}
