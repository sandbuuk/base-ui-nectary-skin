import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconEmojiPeople = createIconClass(templateHTML)
defineCustomElement('sinch-icon-emoji-people', IconEmojiPeople)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-emoji-people': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-emoji-people': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-emoji-people': TSinchIconReact,
    }
  }
}
