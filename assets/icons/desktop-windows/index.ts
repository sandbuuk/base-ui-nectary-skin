import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDesktopWindows = createIconClass(templateHTML)
defineCustomElement('sinch-icon-desktop-windows', IconDesktopWindows)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-desktop-windows': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-desktop-windows': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-desktop-windows': TSinchIconReact,
    }
  }
}
