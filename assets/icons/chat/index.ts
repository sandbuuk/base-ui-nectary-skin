import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-chat', IconChat)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-chat': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-chat': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-chat': TSinchIconReact,
    }
  }
}
