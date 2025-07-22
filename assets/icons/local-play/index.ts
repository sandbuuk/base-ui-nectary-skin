import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLocalPlay = createIconClass(templateHTML)
defineCustomElement('sinch-icon-local-play', IconLocalPlay)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-local-play': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-local-play': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-local-play': TSinchIconReact,
    }
  }
}
