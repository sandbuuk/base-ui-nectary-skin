import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUnfoldLess = createIconClass(templateHTML)
defineCustomElement('sinch-icon-unfold-less', IconUnfoldLess)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-unfold-less': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-unfold-less': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-unfold-less': TSinchIconReact,
    }
  }
}
