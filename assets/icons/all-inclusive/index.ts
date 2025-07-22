import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAllInclusive = createIconClass(templateHTML)
defineCustomElement('sinch-icon-all-inclusive', IconAllInclusive)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-all-inclusive': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-all-inclusive': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-all-inclusive': TSinchIconReact,
    }
  }
}
