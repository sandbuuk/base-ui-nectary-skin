import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChildFriendly = createIconClass(templateHTML)
defineCustomElement('sinch-icon-child-friendly', IconChildFriendly)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-child-friendly': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-child-friendly': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-child-friendly': TSinchIconReact,
    }
  }
}
