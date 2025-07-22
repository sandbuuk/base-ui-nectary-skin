import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHome = createIconClass(templateHTML)
defineCustomElement('sinch-icon-home', IconHome)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-home': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-home': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-home': TSinchIconReact,
    }
  }
}
