import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconScreenShare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-screen-share', IconScreenShare)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-screen-share': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-screen-share': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-screen-share': TSinchIconReact,
    }
  }
}
