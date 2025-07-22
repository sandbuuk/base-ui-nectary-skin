import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFeaturedVideo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-featured-video', IconFeaturedVideo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-featured-video': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-featured-video': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-featured-video': TSinchIconReact,
    }
  }
}
