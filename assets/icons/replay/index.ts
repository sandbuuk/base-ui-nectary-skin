import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReplay = createIconClass(templateHTML)
defineCustomElement('sinch-icon-replay', IconReplay)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-replay': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-replay': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-replay': TSinchIconReact,
    }
  }
}
