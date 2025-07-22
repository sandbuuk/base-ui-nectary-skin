import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrowserNotSupported = createIconClass(templateHTML)
defineCustomElement('sinch-icon-browser-not-supported', IconBrowserNotSupported)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-browser-not-supported': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-browser-not-supported': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-browser-not-supported': TSinchIconReact,
    }
  }
}
