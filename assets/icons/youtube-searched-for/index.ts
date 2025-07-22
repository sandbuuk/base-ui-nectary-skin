import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconYoutubeSearchedFor = createIconClass(templateHTML)
defineCustomElement('sinch-icon-youtube-searched-for', IconYoutubeSearchedFor)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-youtube-searched-for': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-youtube-searched-for': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-youtube-searched-for': TSinchIconReact,
    }
  }
}
