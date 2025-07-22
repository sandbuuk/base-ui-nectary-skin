import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMotionPhotosOn = createIconClass(templateHTML)
defineCustomElement('sinch-icon-motion-photos-on', IconMotionPhotosOn)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-motion-photos-on': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-motion-photos-on': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-motion-photos-on': TSinchIconReact,
    }
  }
}
