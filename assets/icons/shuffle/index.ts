import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShuffle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-shuffle', IconShuffle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-shuffle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-shuffle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-shuffle': TSinchIconReact,
    }
  }
}
