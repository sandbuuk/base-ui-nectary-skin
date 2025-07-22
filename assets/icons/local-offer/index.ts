import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalOffer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-offer', IconLocalOffer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-offer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-offer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-offer': TSinchIconReact,
    }
  }
}
