import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAddToHomeScreen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-add-to-home-screen', IconAddToHomeScreen)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-add-to-home-screen': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-add-to-home-screen': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-add-to-home-screen': TSinchIconReact,
    }
  }
}
