import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCleanHands = createIconClass(templateHTML)
defineCustomElement('sinch-icon-clean-hands', IconCleanHands)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-clean-hands': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-clean-hands': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-clean-hands': TSinchIconReact,
    }
  }
}
