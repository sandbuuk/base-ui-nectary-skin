import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFeaturedPlayList = createIconClass(templateHTML)
defineCustomElement('sinch-icon-featured-play-list', IconFeaturedPlayList)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-featured-play-list': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-featured-play-list': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-featured-play-list': TSinchIconReact,
    }
  }
}
