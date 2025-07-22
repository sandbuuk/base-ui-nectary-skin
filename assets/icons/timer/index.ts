import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTimer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-timer', IconTimer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-timer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-timer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-timer': TSinchIconReact,
    }
  }
}
