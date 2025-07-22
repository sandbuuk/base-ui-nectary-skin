import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBiotech = createIconClass(templateHTML)
defineCustomElement('sinch-icon-biotech', IconBiotech)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-biotech': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-biotech': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-biotech': TSinchIconReact,
    }
  }
}
