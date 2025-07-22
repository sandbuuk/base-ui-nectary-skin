import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSlowMotionVideo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-slow-motion-video', IconSlowMotionVideo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-slow-motion-video': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-slow-motion-video': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-slow-motion-video': TSinchIconReact,
    }
  }
}
