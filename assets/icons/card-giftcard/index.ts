import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCardGiftcard = createIconClass(templateHTML)
defineCustomElement('sinch-icon-card-giftcard', IconCardGiftcard)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-card-giftcard': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-card-giftcard': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-card-giftcard': TSinchIconReact,
    }
  }
}
