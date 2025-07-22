import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconVideoCall = createIconClass(templateHTML)
defineCustomElement('sinch-icon-video-call', IconVideoCall)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-video-call': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-video-call': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-video-call': TSinchIconReact,
    }
  }
}
