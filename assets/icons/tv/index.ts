import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTv = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tv', IconTv)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tv': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tv': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tv': TSinchIconReact,
    }
  }
}
