import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCameraAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-camera-alt', IconCameraAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-camera-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-camera-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-camera-alt': TSinchIconReact,
    }
  }
}
