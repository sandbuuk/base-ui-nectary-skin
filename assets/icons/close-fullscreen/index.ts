import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCloseFullscreen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-close-fullscreen', IconCloseFullscreen)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-close-fullscreen': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-close-fullscreen': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-close-fullscreen': TSinchIconReact,
    }
  }
}
