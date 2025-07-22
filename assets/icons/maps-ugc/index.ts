import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMapsUgc = createIconClass(templateHTML)
defineCustomElement('sinch-icon-maps-ugc', IconMapsUgc)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-maps-ugc': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-maps-ugc': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-maps-ugc': TSinchIconReact,
    }
  }
}
