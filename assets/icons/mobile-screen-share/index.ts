import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMobileScreenShare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mobile-screen-share', IconMobileScreenShare)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mobile-screen-share': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mobile-screen-share': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mobile-screen-share': TSinchIconReact,
    }
  }
}
