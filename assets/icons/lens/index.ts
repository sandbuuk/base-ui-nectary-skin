import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLens = createIconClass(templateHTML)
defineCustomElement('sinch-icon-lens', IconLens)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-lens': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-lens': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-lens': TSinchIconReact,
    }
  }
}
