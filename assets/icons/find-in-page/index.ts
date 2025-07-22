import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFindInPage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-find-in-page', IconFindInPage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-find-in-page': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-find-in-page': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-find-in-page': TSinchIconReact,
    }
  }
}
