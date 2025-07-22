import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconShortText = createIconClass(templateHTML)
defineCustomElement('sinch-icon-short-text', IconShortText)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-short-text': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-short-text': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-short-text': TSinchIconReact,
    }
  }
}
