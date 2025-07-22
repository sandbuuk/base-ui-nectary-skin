import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSubject = createIconClass(templateHTML)
defineCustomElement('sinch-icon-subject', IconSubject)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-subject': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-subject': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-subject': TSinchIconReact,
    }
  }
}
