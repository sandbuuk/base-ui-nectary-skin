import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNoteAdd = createIconClass(templateHTML)
defineCustomElement('sinch-icon-note-add', IconNoteAdd)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-note-add': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-note-add': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-note-add': TSinchIconReact,
    }
  }
}
