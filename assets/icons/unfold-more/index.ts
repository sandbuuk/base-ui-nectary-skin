import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUnfoldMore = createIconClass(templateHTML)
defineCustomElement('sinch-icon-unfold-more', IconUnfoldMore)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-unfold-more': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-unfold-more': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-unfold-more': TSinchIconReact,
    }
  }
}
