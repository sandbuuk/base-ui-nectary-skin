import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmojiFlags = createIconClass(templateHTML)
defineCustomElement('sinch-icon-emoji-flags', IconEmojiFlags)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-flags': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-flags': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-emoji-flags': TSinchIconReact,
    }
  }
}
