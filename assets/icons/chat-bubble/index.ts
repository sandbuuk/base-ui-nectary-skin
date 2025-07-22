import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChatBubble = createIconClass(templateHTML)
defineCustomElement('sinch-icon-chat-bubble', IconChatBubble)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-chat-bubble': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-chat-bubble': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-chat-bubble': TSinchIconReact,
    }
  }
}
