import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLink = createIconClass(templateHTML)
defineCustomElement('sinch-icon-link', IconLink)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-link': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-link': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-link': TSinchIconReact,
    }
  }
}
