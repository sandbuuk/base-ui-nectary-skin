import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmojiEmotions = createIconClass(templateHTML)
defineCustomElement('sinch-icon-emoji-emotions', IconEmojiEmotions)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-emotions': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-emotions': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-emoji-emotions': TSinchIconReact,
    }
  }
}
