import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlipToBack = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flip-to-back', IconFlipToBack)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flip-to-back': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flip-to-back': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flip-to-back': TSinchIconReact,
    }
  }
}
