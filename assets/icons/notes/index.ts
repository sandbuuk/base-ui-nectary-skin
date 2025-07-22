import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNotes = createIconClass(templateHTML)
defineCustomElement('sinch-icon-notes', IconNotes)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-notes': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-notes': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-notes': TSinchIconReact,
    }
  }
}
