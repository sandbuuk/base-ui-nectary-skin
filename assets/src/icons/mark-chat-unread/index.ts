import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mark-chat-unread', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-chat-unread': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mark-chat-unread': TSinchIconElement,
  }
}
