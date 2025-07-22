import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLastPage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-last-page', IconLastPage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-last-page': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-last-page': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-last-page': TSinchIconReact,
    }
  }
}
