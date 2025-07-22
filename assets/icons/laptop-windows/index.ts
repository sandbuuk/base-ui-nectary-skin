import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLaptopWindows = createIconClass(templateHTML)
defineCustomElement('sinch-icon-laptop-windows', IconLaptopWindows)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-laptop-windows': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-laptop-windows': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-laptop-windows': TSinchIconReact,
    }
  }
}
