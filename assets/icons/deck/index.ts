import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDeck = createIconClass(templateHTML)
defineCustomElement('sinch-icon-deck', IconDeck)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-deck': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-deck': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-deck': TSinchIconReact,
    }
  }
}
