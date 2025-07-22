import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconStopScreenShare = createIconClass(templateHTML)
defineCustomElement('sinch-icon-stop-screen-share', IconStopScreenShare)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-stop-screen-share': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-stop-screen-share': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-stop-screen-share': TSinchIconReact,
    }
  }
}
