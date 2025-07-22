import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmojiTransportation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-emoji-transportation', IconEmojiTransportation)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-transportation': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-transportation': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-emoji-transportation': TSinchIconReact,
    }
  }
}
