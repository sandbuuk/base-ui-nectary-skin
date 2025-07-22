import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconUndo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-undo', IconUndo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-undo': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-undo': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-undo': TSinchIconReact,
    }
  }
}
