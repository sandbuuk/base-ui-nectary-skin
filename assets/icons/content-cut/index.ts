import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconContentCut = createIconClass(templateHTML)
defineCustomElement('sinch-icon-content-cut', IconContentCut)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-content-cut': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-content-cut': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-content-cut': TSinchIconReact,
    }
  }
}
