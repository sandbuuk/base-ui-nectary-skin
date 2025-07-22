import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-share', IconShare)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-share': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-share': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-share': TSinchIconReact,
    }
  }
}
