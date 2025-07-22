import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconThumbUpAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-thumb-up-alt', IconThumbUpAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-thumb-up-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-thumb-up-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-thumb-up-alt': TSinchIconReact,
    }
  }
}
