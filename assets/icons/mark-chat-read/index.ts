import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMarkChatRead = createIconClass(templateHTML)
defineCustomElement('sinch-icon-mark-chat-read', IconMarkChatRead)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-mark-chat-read': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-chat-read': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-mark-chat-read': TSinchIconReact,
    }
  }
}
