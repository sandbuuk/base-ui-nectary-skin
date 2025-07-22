import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconOpacity = createIconClass(templateHTML)
defineCustomElement('sinch-icon-opacity', IconOpacity)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-opacity': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-opacity': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-opacity': TSinchIconReact,
    }
  }
}
