import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconColorLens = createIconClass(templateHTML)
defineCustomElement('sinch-icon-color-lens', IconColorLens)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-color-lens': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-color-lens': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-color-lens': TSinchIconReact,
    }
  }
}
