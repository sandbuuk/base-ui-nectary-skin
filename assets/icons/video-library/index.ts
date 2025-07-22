import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVideoLibrary = createIconClass(templateHTML)
defineCustomElement('sinch-icon-video-library', IconVideoLibrary)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-video-library': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-video-library': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-video-library': TSinchIconReact,
    }
  }
}
