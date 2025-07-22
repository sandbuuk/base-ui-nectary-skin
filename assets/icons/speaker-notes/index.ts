import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSpeakerNotes = createIconClass(templateHTML)
defineCustomElement('sinch-icon-speaker-notes', IconSpeakerNotes)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-speaker-notes': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-speaker-notes': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-speaker-notes': TSinchIconReact,
    }
  }
}
