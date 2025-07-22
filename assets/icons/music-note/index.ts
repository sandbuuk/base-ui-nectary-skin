import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMusicNote = createIconClass(templateHTML)
defineCustomElement('sinch-icon-music-note', IconMusicNote)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-music-note': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-music-note': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-music-note': TSinchIconReact,
    }
  }
}
