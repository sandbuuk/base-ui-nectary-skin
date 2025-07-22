import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewHeadline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-headline', IconViewHeadline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-headline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-headline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-headline': TSinchIconReact,
    }
  }
}
