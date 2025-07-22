import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOpenInBrowser = createIconClass(templateHTML)
defineCustomElement('sinch-icon-open-in-browser', IconOpenInBrowser)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-open-in-browser': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-open-in-browser': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-open-in-browser': TSinchIconReact,
    }
  }
}
