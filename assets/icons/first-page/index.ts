import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFirstPage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-first-page', IconFirstPage)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-first-page': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-first-page': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-first-page': TSinchIconReact,
    }
  }
}
