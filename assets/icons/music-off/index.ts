import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMusicOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-music-off', IconMusicOff)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-music-off': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-music-off': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-music-off': TSinchIconReact,
    }
  }
}
