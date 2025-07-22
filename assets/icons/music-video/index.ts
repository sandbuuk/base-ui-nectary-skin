import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMusicVideo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-music-video', IconMusicVideo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-music-video': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-music-video': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-music-video': TSinchIconReact,
    }
  }
}
