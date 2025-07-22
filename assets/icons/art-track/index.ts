import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconArtTrack = createIconClass(templateHTML)
defineCustomElement('sinch-icon-art-track', IconArtTrack)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-art-track': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-art-track': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-art-track': TSinchIconReact,
    }
  }
}
