import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFastRewind = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fast-rewind', IconFastRewind)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fast-rewind': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fast-rewind': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fast-rewind': TSinchIconReact,
    }
  }
}
