import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMissedVideoCall = createIconClass(templateHTML)
defineCustomElement('sinch-icon-missed-video-call', IconMissedVideoCall)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-missed-video-call': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-missed-video-call': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-missed-video-call': TSinchIconReact,
    }
  }
}
