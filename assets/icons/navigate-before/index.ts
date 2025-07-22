import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNavigateBefore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-navigate-before', IconNavigateBefore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-navigate-before': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-navigate-before': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-navigate-before': TSinchIconReact,
    }
  }
}
