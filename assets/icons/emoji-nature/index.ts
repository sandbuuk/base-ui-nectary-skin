import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmojiNature = createIconClass(templateHTML)
defineCustomElement('sinch-icon-emoji-nature', IconEmojiNature)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-nature': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-nature': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-emoji-nature': TSinchIconReact,
    }
  }
}
