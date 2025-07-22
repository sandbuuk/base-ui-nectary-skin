import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLandscape = createIconClass(templateHTML)
defineCustomElement('sinch-icon-landscape', IconLandscape)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-landscape': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-landscape': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-landscape': TSinchIconReact,
    }
  }
}
