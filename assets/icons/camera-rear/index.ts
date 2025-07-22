import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCameraRear = createIconClass(templateHTML)
defineCustomElement('sinch-icon-camera-rear', IconCameraRear)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-camera-rear': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-camera-rear': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-camera-rear': TSinchIconReact,
    }
  }
}
