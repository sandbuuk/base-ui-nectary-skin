import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReplay5 = createIconClass(templateHTML)
defineCustomElement('sinch-icon-replay-5', IconReplay5)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-replay-5': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-replay-5': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-replay-5': TSinchIconReact,
    }
  }
}
