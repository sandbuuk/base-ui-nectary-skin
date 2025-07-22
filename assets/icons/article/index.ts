import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArticle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-article', IconArticle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-article': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-article': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-article': TSinchIconReact,
    }
  }
}
