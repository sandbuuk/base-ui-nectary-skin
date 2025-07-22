import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFlipToFront = createIconClass(templateHTML)
defineCustomElement('sinch-icon-flip-to-front', IconFlipToFront)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-flip-to-front': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-flip-to-front': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-flip-to-front': TSinchIconReact,
    }
  }
}
