import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmojiObjects = createIconClass(templateHTML)
defineCustomElement('sinch-icon-emoji-objects', IconEmojiObjects)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-objects': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-objects': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-emoji-objects': TSinchIconReact,
    }
  }
}
