import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMotionPhotosPaused = createIconClass(templateHTML)
defineCustomElement('sinch-icon-motion-photos-paused', IconMotionPhotosPaused)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-motion-photos-paused': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-motion-photos-paused': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-motion-photos-paused': TSinchIconReact,
    }
  }
}
