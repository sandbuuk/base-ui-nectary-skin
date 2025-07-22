import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPlaylistPlay = createIconClass(templateHTML)
defineCustomElement('sinch-icon-playlist-play', IconPlaylistPlay)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-playlist-play': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-playlist-play': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-playlist-play': TSinchIconReact,
    }
  }
}
