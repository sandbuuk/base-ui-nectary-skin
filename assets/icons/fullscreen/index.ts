import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFullscreen = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fullscreen', IconFullscreen)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fullscreen': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fullscreen': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fullscreen': TSinchIconReact,
    }
  }
}
