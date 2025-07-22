import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPlaylistAddCheck = createIconClass(templateHTML)
defineCustomElement('sinch-icon-playlist-add-check', IconPlaylistAddCheck)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-playlist-add-check': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-playlist-add-check': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-playlist-add-check': TSinchIconReact,
    }
  }
}
