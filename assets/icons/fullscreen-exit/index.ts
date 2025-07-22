import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFullscreenExit = createIconClass(templateHTML)
defineCustomElement('sinch-icon-fullscreen-exit', IconFullscreenExit)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-fullscreen-exit': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-fullscreen-exit': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-fullscreen-exit': TSinchIconReact,
    }
  }
}
