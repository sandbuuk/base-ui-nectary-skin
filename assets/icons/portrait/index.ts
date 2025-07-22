import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPortrait = createIconClass(templateHTML)
defineCustomElement('sinch-icon-portrait', IconPortrait)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-portrait': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-portrait': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-portrait': TSinchIconReact,
    }
  }
}
