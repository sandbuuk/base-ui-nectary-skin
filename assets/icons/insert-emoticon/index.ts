import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconInsertEmoticon = createIconClass(templateHTML)
defineCustomElement('sinch-icon-insert-emoticon', IconInsertEmoticon)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-insert-emoticon': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-insert-emoticon': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-insert-emoticon': TSinchIconReact,
    }
  }
}
