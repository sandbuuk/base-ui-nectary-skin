import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSchool = createIconClass(templateHTML)
defineCustomElement('sinch-icon-school', IconSchool)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-school': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-school': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-school': TSinchIconReact,
    }
  }
}
