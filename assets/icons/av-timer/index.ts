import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAvTimer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-av-timer', IconAvTimer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-av-timer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-av-timer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-av-timer': TSinchIconReact,
    }
  }
}
