import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCameraEnhance = createIconClass(templateHTML)
defineCustomElement('sinch-icon-camera-enhance', IconCameraEnhance)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-camera-enhance': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-camera-enhance': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-camera-enhance': TSinchIconReact,
    }
  }
}
