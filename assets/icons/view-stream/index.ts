import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconViewStream = createIconClass(templateHTML)
defineCustomElement('sinch-icon-view-stream', IconViewStream)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-view-stream': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-view-stream': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-view-stream': TSinchIconReact,
    }
  }
}
