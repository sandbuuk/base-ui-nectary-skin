import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconThumbDownAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-thumb-down-alt', IconThumbDownAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-thumb-down-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thumb-down-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-thumb-down-alt': TSinchIconReact,
    }
  }
}
