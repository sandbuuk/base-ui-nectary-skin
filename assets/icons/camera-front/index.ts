import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCameraFront = createIconClass(templateHTML)
defineCustomElement('sinch-icon-camera-front', IconCameraFront)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-camera-front': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-camera-front': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-camera-front': TSinchIconReact,
    }
  }
}
