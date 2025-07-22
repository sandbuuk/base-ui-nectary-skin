import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAlbum = createIconClass(templateHTML)
defineCustomElement('sinch-icon-album', IconAlbum)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-album': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-album': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-album': TSinchIconReact,
    }
  }
}
