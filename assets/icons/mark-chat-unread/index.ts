import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMarkChatUnread = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mark-chat-unread', IconMarkChatUnread)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mark-chat-unread': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-chat-unread': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mark-chat-unread': TSinchIconReact,
    }
  }
}
