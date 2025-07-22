import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMarkunreadMailbox = createIconClass(templateHTML)
defineCustomElement('sinch-icon-markunread-mailbox', IconMarkunreadMailbox)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-markunread-mailbox': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-markunread-mailbox': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-markunread-mailbox': TSinchIconReact,
    }
  }
}
