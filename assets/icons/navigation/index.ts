import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNavigation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-navigation', IconNavigation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-navigation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-navigation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-navigation': TSinchIconReact,
    }
  }
}
