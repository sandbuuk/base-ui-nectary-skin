import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconGrade = createIconClass(templateHTML)
defineCustomElement('sinch-icon-grade', IconGrade)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-grade': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-grade': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-grade': TSinchIconReact,
    }
  }
}
