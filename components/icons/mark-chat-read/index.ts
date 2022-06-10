import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-mark-chat-read', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-mark-chat-read': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-mark-chat-read': TSinchIconElement,
  }
}
