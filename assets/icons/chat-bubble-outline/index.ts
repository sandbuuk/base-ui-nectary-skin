import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconChatBubbleOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-chat-bubble-outline', IconChatBubbleOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-chat-bubble-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-chat-bubble-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-chat-bubble-outline': TSinchIconReact,
    }
  }
}
