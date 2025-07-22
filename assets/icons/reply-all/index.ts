import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconReplyAll = createIconClass(templateHTML)
defineCustomElement('sinch-icon-reply-all', IconReplyAll)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-reply-all': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-reply-all': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-reply-all': TSinchIconReact,
    }
  }
}
